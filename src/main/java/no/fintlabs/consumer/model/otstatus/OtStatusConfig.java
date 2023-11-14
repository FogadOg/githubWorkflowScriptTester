package no.fintlabs.consumer.model.otstatus;

import no.fint.model.resource.utdanning.kodeverk.OtStatusResource;
import no.fintlabs.core.consumer.shared.config.ConsumerProps;
import no.fintlabs.core.consumer.shared.resource.ConsumerConfig;
import org.springframework.stereotype.Component;

@Component
public class OtStatusConfig extends ConsumerConfig<OtStatusResource> {

    public OtStatusConfig(ConsumerProps consumerProps) {
        super(consumerProps);
    }

    @Override
    protected String resourceName() {
        return "otstatus";
    }
}
