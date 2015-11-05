/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define('Globe/Atmosphere',['Renderer/NodeMesh','THREE','text!Renderer/Shader/GlowFS.glsl','text!Renderer/Shader/GlowVS.glsl'], function(NodeMesh,THREE,GlowFS,GlowVS){

    function Atmosphere(){
        
        NodeMesh.call( this );
        this.uniforms  = 
        {                        
            atmoIN  : { type: "i" , value: 0 },
            screenSize: {type: "v2", value: new THREE.Vector2(window.innerWidth,window.innerHeight)} // Should be updated on screen resize...
        };
        
        this.material = new THREE.ShaderMaterial( {
	
            uniforms        : this.uniforms,
            vertexShader    : GlowVS,
            fragmentShader  : GlowFS,
            side            : THREE.BackSide,
            blending        : THREE.AdditiveBlending,
            transparent     : true

        } );
                
        this.geometry = new THREE.SphereGeometry( 7.3, 64, 64 );
        
       // this.add(new THREE.Mesh(new THREE.SphereGeometry(6.3, 32, 32 ), new THREE.MeshBasicMaterial({color : 0x4B683A})));
        
    }
    
    Atmosphere.prototype = Object.create( NodeMesh.prototype );
    
    Atmosphere.prototype.constructor = Atmosphere;

    return Atmosphere;

});