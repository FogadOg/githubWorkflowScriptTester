package no.fintlabs.consumer.model.otenhet;

import no.fint.model.resource.utdanning.kodeverk.OTEnhetResource;
import no.fint.model.resource.utdanning.larling.LarlingResource;
import no.fintlabs.core.consumer.shared.resource.kafka.EntityKafkaConsumer;
import no.fintlabs.kafka.common.ListenerBeanRegistrationService;
import no.fintlabs.kafka.entity.EntityConsumerFactoryService;
import no.fintlabs.kafka.entity.topic.EntityTopicService;
import org.springframework.stereotype.Service;

@Service
public class OTEnhetKafkaConsumer extends EntityKafkaConsumer<OTEnhetResource> {
    public OTEnhetKafkaConsumer(
            EntityConsumerFactoryService entityConsumerFactoryService,
            ListenerBeanRegistrationService listenerBeanRegistrationService,
            EntityTopicService entityTopicService,
            OTEnhetConfig config) {
        super(entityConsumerFactoryService,
                listenerBeanRegistrationService,
                entityTopicService,
                config);
    }
}
