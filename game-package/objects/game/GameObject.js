const CANNON = require('cannon');

module.exports = class GameObject
{
	constructor(id, type, mass, material)
	{
		this.id = id; // object_id
		this.type = type; // "terrain", "player", "chest"...

		this.body = new CANNON.Body({ //defines the cannonjs body
			mass: mass,
			material: material
		});
		this.body.id = this.id;
	}

	addTo(world)
	{
		world.add(this.body);
	}

	removeFrom(world)
	{
		world.remove(this.body);
	}

	updatePosition(x_pos, y_pos, z_pos)
	{
		this.body.position.set(x_pos, y_pos, z_pos);
	}

	updateAngle(x_quat, y_quat, z_quat, w_quat)
	{
		this.body.quaternion.set(x_quat, y_quat, z_quat, w_quat);
	}

	downloadInitial() 
	{
		return {
			id: this.id,
			position: {
				x: this.body.position.x,
				y: this.body.position.z,
				z: this.body.position.y
			},
			quaternion: {
				x: this.body.quaternion.x,
				y: this.body.quaternion.z,
				z: this.body.quaternion.y,
				w: this.body.quaternion.w
			}
		}
	}

	downloadUpdates() 
	{
		return {
			id: this.id,
			position: {
				x: this.body.position.x,
				y: this.body.position.z,
				z: this.body.position.y
			},
			velocity: {
				x: this.body.velocity.x,
				y: this.body.velocity.z,
				z: this.body.velocity.y
			},
			quaternion: {
				x: this.body.quaternion.x,
				y: this.body.quaternion.z,
				z: this.body.quaternion.y,
				w: this.body.quaternion.w
			}
		}
	}
}