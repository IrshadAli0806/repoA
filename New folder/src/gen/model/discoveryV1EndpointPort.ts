/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.21.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

/**
* EndpointPort represents a Port used by an EndpointSlice
*/
export class DiscoveryV1EndpointPort {
    /**
    * The application protocol for this port. This field follows standard Kubernetes label syntax. Un-prefixed names are reserved for IANA standard service names (as per RFC-6335 and http://www.iana.org/assignments/service-names). Non-standard protocols should use prefixed names such as mycompany.com/my-custom-protocol.
    */
    'appProtocol'?: string;
    /**
    * The name of this port. All ports in an EndpointSlice must have a unique name. If the EndpointSlice is dervied from a Kubernetes service, this corresponds to the Service.ports[].name. Name must either be an empty string or pass DNS_LABEL validation: * must be no more than 63 characters long. * must consist of lower case alphanumeric characters or \'-\'. * must start and end with an alphanumeric character. Default is empty string.
    */
    'name'?: string;
    /**
    * The port number of the endpoint. If this is not specified, ports are not restricted and must be interpreted in the context of the specific consumer.
    */
    'port'?: number;
    /**
    * The IP protocol for this port. Must be UDP, TCP, or SCTP. Default is TCP.
    */
    'protocol'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "appProtocol",
            "baseName": "appProtocol",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "number"
        },
        {
            "name": "protocol",
            "baseName": "protocol",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DiscoveryV1EndpointPort.attributeTypeMap;
    }
}

