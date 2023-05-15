package no.fintlabs.consumer.model.otstatus;

import no.fint.model.resource.utdanning.kodeverk.OTStatusResource;
import no.fintlabs.core.consumer.shared.ConsumerProps;
import no.fintlabs.core.consumer.shared.resource.ConsumerConfig;
import org.springframework.stereotype.Component;

@Component
public class OTStatusConfig extends ConsumerConfig<OTStatusResource> {

    public OTStatusConfig(ConsumerProps consumerProps) {
        super(consumerProps);
    }

    @Override
    protected String resourceName() {
        return "otstatus";
    }
}
