#! /bin/bash -x
openapi-generator-cli generate -g typescript-axios -i "../1.0.0/" -c "./api_config/client_config.json"
