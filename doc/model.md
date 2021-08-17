The physics are modeled step-wise (using p2.js) with a few simplifications:

- Rotations are disallowed (as if torque doesn't happen)
- Air is ignored
- Viscosity is handled in a somewhat custom way in order to minimize unwanted oscillations and work with the timesteps
- No vertical friction, and no restitution
- Velocity is limited to 5m/s
- Invisible walls/ceiling are added
- The liquid level always remains flat