if service is injected at component level (using providers), each component will get different service instance  

if service is inject at module (root) as well as component level (lets say two comp using it)
still multiple instances of services will be created, as component is overrding configuration
