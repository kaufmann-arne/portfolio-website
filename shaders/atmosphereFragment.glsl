varying vec3 vertexNormal;

void main() {
	float intensity = pow(0.7 - dot(vertexNormal, vec3(0.0, 0.0, 1.0)), 2.0);
	gl_FragColor = vec4(0.031, 0.992, 0.847, 1.0) * intensity;
}

