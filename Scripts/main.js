 // Weapons
 const eclipseSDSuperLaser = new Weapon();
 
 // Bullets
 const eclipseSDSuperLaser = extend(LaserBulletType, {});
} 

eclipseSDSuperLaser.lightningSpacing = 15
eclipseSDSuperLaser.width = 250
eclipseSDSuperLaser.length = 400
eclipseSDSuperLaser.lightningDelay = 15
eclipseSDSuperLaser.damage = Number.MAX_VALUE - 1;
eclipseSDSuperLaser.lightningColor = Pal.remove;
eclipseSDSuperLaser.colors = [ Pal.remove, Color.green];

//eclipseSD
eclipseSD.speed = 1
eclipseSD.health = 5000000;
eclipseSD.hitSize = 100;

//units
require("unit/eclipseSD");




 
 

 
