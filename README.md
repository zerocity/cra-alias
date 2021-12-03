# Aliases

## What works

import { Layout } from "@app/component";

## What not

this works in cosmos or in dev but it dont work in jest

´´´tsx
import { Layout } from "@component";
´´´

´´´json
"paths": {
"@component/*": ["./src/component/*"]
}
´´´
