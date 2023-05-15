package no.fintlabs.consumer.model.otenhet;

import lombok.extern.slf4j.Slf4j;
import no.fint.antlr.FintFilterService;
import no.fint.model.resource.utdanning.kodeverk.OTEnhetResource;
import no.fint.relations.FintRelationsMediaType;
import no.fintlabs.consumer.config.RestEndpoints;
import no.fintlabs.core.consumer.shared.resource.ConsumerRestController;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@CrossOrigin
@RestController
@RequestMapping(name = "OTEnhet", value = RestEndpoints.OTENHET, produces = {FintRelationsMediaType.APPLICATION_HAL_JSON_VALUE, MediaType.APPLICATION_JSON_VALUE})
public class OTEnhetController extends ConsumerRestController<OTEnhetResource> {

    public OTEnhetController(OTEnhetService service, OTEnhetLinker linker, FintFilterService oDataFilterService) {
        super(service, linker, oDataFilterService);
    }
}
