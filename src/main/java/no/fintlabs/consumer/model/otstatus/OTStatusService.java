package no.fintlabs.consumer.model.otstatus;

import no.fint.model.felles.kompleksedatatyper.Identifikator;
import no.fint.model.resource.utdanning.kodeverk.OTStatusResource;
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
public class OTStatusService extends CacheService<OTStatusResource> {

    private final OTStatusKafkaConsumer elevfravarKafkaConsumer;
    private final OTStatusLinker linker;

    public OTStatusService(
            OTStatusConfig config,
            CacheManager cacheManager,
            OTStatusKafkaConsumer kafkaConsumer,
            OTStatusLinker linker) {
        super(config, cacheManager, kafkaConsumer);
        this.elevfravarKafkaConsumer = kafkaConsumer;
        this.linker = linker;
    }

    @Override
    protected Cache<OTStatusResource> initializeCache(CacheManager cacheManager, ConsumerConfig<OTStatusResource> consumerConfig, String s) {
        return cacheManager.create(PackingTypes.POJO, consumerConfig.getOrgId(), consumerConfig.getResourceName());
    }

    @PostConstruct
    private void registerKafkaListener() {
        long retension = elevfravarKafkaConsumer.registerListener(OTStatusResource.class, this::addResourceToCache);
        getCache().setRetentionPeriodInMs(retension);
    }

    private void addResourceToCache(ConsumerRecord<String, OTStatusResource> consumerRecord) {
        this.eventLogger.logDataRecieved();
        if (consumerRecord.value() == null) {
            getCache().remove(consumerRecord.key());
        } else {
            OTStatusResource OTStatusResource = consumerRecord.value();
            linker.mapLinks(OTStatusResource);
            getCache().put(consumerRecord.key(), OTStatusResource, linker.hashCodes(OTStatusResource));
        }
    }

    @Override
    public Optional<OTStatusResource> getBySystemId(String systemId) {
        return getCache().getLastUpdatedByFilter(systemId.hashCode(),
                resource -> Optional
                        .ofNullable(resource)
                        .map(OTStatusResource::getSystemId)
                        .map(Identifikator::getIdentifikatorverdi)
                        .map(systemId::equals)
                        .orElse(false));
    }
}