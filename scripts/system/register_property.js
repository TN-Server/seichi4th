import { world, DynamicPropertiesDefinition, MinecraftEntityTypes } from '@minecraft/server';
import { PropertyId } from '../util/constants';

world.afterEvents.worldInitialize.subscribe(({ propertyRegistry }) => {
  const def = new DynamicPropertiesDefinition(); // for players
  def.defineNumber(PropertyId.skillType);
  def.defineBoolean(PropertyId.skillEnabled);
  def.defineBoolean(PropertyId.toggleSneak);
  def.defineBoolean(PropertyId.showRandom);
  
  def.defineBoolean(PropertyId.hasSkill1);
  def.defineBoolean(PropertyId.hasSkill2);
  def.defineBoolean(PropertyId.hasSkill3);
  def.defineBoolean(PropertyId.hasSkill4);
  def.defineBoolean(PropertyId.hasSkill5);
  
  propertyRegistry.registerEntityTypeDynamicProperties(def, MinecraftEntityTypes.player);
});