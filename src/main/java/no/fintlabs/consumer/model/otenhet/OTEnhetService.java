package no.fintlabs.consumer.model.otenhet;

import no.fint.model.felles.kompleksedatatyper.Identifikator;
import no.fint.model.resource.utdanning.kodeverk.OTEnhetResource;
import no.fintlabs.cache.Cache;
import no.fintlabs.cache.CacheManager;
import no.fintlabs.cache.packing.PackingTypes;
import no.fintlabs.core.consumer.shared.resource.CacheService;
import no.fintlabs.core.consumer.shared.resource.ConsumerConfig;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.Optional;

@Service
public class OTEnhetService extends CacheService<OTEnhetResource> {

    private final OTEnhetKafkaConsumer elevfravarKafkaConsumer;
    private final OTEnhetLinker linker;

    public OTEnhetService(
            OTEnhetConfig config,
            CacheManager cacheManager,
            OTEnhetKafkaConsumer kafkaConsumer,
            OTEnhetLinker linker) {
        super(config, cacheManager, kafkaConsumer);
        this.elevfravarKafkaConsumer = kafkaConsumer;
        this.linker = linker;
    }

    @Override
    protected Cache<OTEnhetResource> initializeCache(CacheManager cacheManager, ConsumerConfig<OTEnhetResource> consumerConfig, String s) {
        return cacheManager.create(PackingTypes.POJO, consumerConfig.getOrgId(), consumerConfig.getResourceName());
    }

    @PostConstruct
    private void registerKafkaListener() {
        long retension = elevfravarKafkaConsumer.registerListener(OTEnhetResource.class, this::addResourceToCache);
        getCache().setRetentionPeriodInMs(retension);
    }

    private void addResourceToCache(ConsumerRecord<String, OTEnhetResource> consumerRecord) {
        this.eventLogger.logDataRecieved();
        if (consumerRecord.value() == null) {
            getCache().remove(consumerRecord.key());
        } else {
            OTEnhetResource OTEnhetResource = consumerRecord.value();
            linker.mapLinks(OTEnhetResource);
            getCache().put(consumerRecord.key(), OTEnhetResource, linker.hashCodes(OTEnhetResource));
        }
    }

    @Override
    public Optional<OTEnhetResource> getBySystemId(String systemId) {
        return getCache().getLastUpdatedByFilter(systemId.hashCode(),
                resource -> Optional
                        .ofNullable(resource)
                        .map(OTEnhetResource::getSystemId)
                        .map(Identifikator::getIdentifikatorverdi)
                        .map(systemId::equals)
                        .orElse(false));
    }
}