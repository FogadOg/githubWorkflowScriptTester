package no.fintlabs.consumer.config;

import com.google.common.collect.ImmutableMap;

import java.util.Map;

public class LinkMapper {

    public static Map<String, String> linkMapper() {
        return ImmutableMap.<String, String>builder()
                .put("no.fint.model.utdanning.kodeverk.OTEnhet", "/utdanning/kodeverk/otenhet")
                .put("no.fint.model.utdanning.kodeverk.OTStatus", "/utdanning/kodeverk/otstatus")
                .build();
    }

}
