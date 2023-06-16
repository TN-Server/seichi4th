import { world, DynamicPropertiesDefinition } from '@minecraft/server';

world.afterEvents.worldInitialize.subscribe(({ propertyRegistry }) => {
  const def = new DynamicPropertiesDefinition();
  propertyRegistry.registerWorldDynamicProperties(def);
});