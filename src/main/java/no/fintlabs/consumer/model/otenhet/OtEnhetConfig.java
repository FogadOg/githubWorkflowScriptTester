package no.fintlabs.consumer.model.otenhet;

import no.fint.model.resource.utdanning.kodeverk.OTEnhetResource;
import no.fintlabs.core.consumer.shared.ConsumerProps;
import no.fintlabs.core.consumer.shared.resource.ConsumerConfig;
import org.springframework.stereotype.Component;

@Component
public class OTEnhetConfig extends ConsumerConfig<OTEnhetResource> {

    public OTEnhetConfig(ConsumerProps consumerProps) {
        super(consumerProps);
    }

    @Override
    protected String resourceName() {
        return "otenhet";
    }
}
