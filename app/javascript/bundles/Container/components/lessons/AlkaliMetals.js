import React, { useEffect } from "react";
import Text from "./text/Text";
import * as THREE from "three";
import { CSS3DRenderer } from '../../../../scimo/scripts/CSS3DRenderer';
import { CSS3DObject } from '../../../../scimo/scripts/CSS3DRenderer';
import TrackballControls from 'three-trackballcontrols'
import * as TWEEN from 'tween';
import  table  from '../../../../scimo/scripts/table';
import ButtonLinkToText from "./ButtonLinkToText";


const AlkaliMetals = props => {
      useEffect(() => {
        let camera, scene, renderer;
        let controls;
        let objects = [];
        let alkali = [], temp = [];
        let targets = { table: [], sphere: [], helix: [] };
        init();
        animate();
    
        function init() {
            camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
            camera.position.z = 3000;
            scene = new THREE.Scene();
    
            // table
            for ( let i = 0; i < table.length; i += 5 ) {
                let element = document.createElement( 'div' );
                element.className = 'element';

                let number = document.createElement( 'div' );
                number.className = 'number';
                number.textContent = ( i / 5 ) + 1;
                element.appendChild( number );
                let symbol = document.createElement( 'div' );
                symbol.className = 'symbol';
                symbol.textContent = table[ i ];
                element.appendChild( symbol );
                let details = document.createElement( 'div' );
                details.className = 'details';
                details.innerHTML = table[ i + 1 ] + '<br>' + table[ i + 2 ];
                element.appendChild( details );
                var object = new CSS3DObject( element );
                object.position.x = Math.random() * 4000 - 2000;
                object.position.y = Math.random() * 4000 - 2000;
                object.position.z = Math.random() * 4000 - 2000;
                scene.add( object );
                objects.push( object );
    
                if(i == 10 || i == 50 || i == 90 || i == 180 || i == 270 || i == 430) {
                    element.style.backgroundColor = 'rgba(127, 68, 206, 0.75)';
                    alkali.push( object );
                }
                //
                var object = new THREE.Object3D();
                object.position.x = ( table[ i + 3 ] * 140 ) - 1330;
                object.position.y = - ( table[ i + 4 ] * 180 ) + 990;
                targets.table.push( object );
            }
            // sphere
            var vector = new THREE.Vector3();
            for ( let i = 0, l = objects.length; i < l; i ++  ) {
                let phi = Math.acos( - 1 + ( 2 * i ) / l );
                let theta = Math.sqrt( l * Math.PI ) * phi;
                var object = new THREE.Object3D();
                object.position.setFromSphericalCoords( 800, phi, theta );
                vector.copy( object.position ).multiplyScalar( 2 );
                object.lookAt( vector );
                targets.sphere.push( object );
            }
            // helix
            var vector = new THREE.Vector3();
            for ( let i = 0; i < objects.length; i ++ ) {
                let theta = i*1.01;
                let y = - ( i*12 ) + 500;
                let x = - ( i*30 ) + 1000;
                var object = new THREE.Object3D();
                object.position.setFromCylindricalCoords( x, theta, y );
                vector.x = object.position.x;
                vector.y = object.position.y;
                vector.z = object.position.z * 1;
                object.lookAt( vector );
                targets.helix.push( object );
            }
            //
            renderer = new CSS3DRenderer();
            renderer.setSize( window.innerWidth, window.innerHeight );
            document.getElementById( 'container' ).appendChild( renderer.domElement );
            //
            controls = new TrackballControls( camera, renderer.domElement );
            controls.rotateSpeed = 0.5;
            controls.minDistance = 500;
            controls.maxDistance = 6000;
            controls.addEventListener( 'change', render );
            transform( targets.sphere, 2000 );
            var button = document.getElementById( 'table' );
            button.addEventListener( 'click', function () {
                if(temp.length > 0) {
                    objects = temp;
                    temp = [];
                }
                transform( targets.table, 2000 );
            }, false );
    
            var button = document.getElementById( 'helix' );
            button.addEventListener( 'click', function () {
                temp = objects;
                objects = alkali;
                transform( targets.helix, 2000 );
            }, false );
            //
            window.addEventListener( 'resize', onWindowResize, false );
        }

        function transform( targets, duration ) {
            TWEEN.removeAll();
            for ( let i = 0; i < objects.length; i ++ ) {
                var object = objects[ i ];
                let target = targets[ i ];
                new TWEEN.Tween( object.position )
                    .to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
                    .easing( TWEEN.Easing.Exponential.InOut )
                    .start();
                new TWEEN.Tween( object.rotation )
                .to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
                .easing( TWEEN.Easing.Exponential.InOut )
                .start();
            }
            new TWEEN.Tween( this )
                .to( {}, duration * 2 )
                .onUpdate( render )
                .start();
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );
            render();
        }

        function animate() {
            requestAnimationFrame( animate );
            TWEEN.update();
            controls.update();
        }

        function render() {
            renderer.render( scene, camera );
        }
    
        let prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
            let currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("to-ammend").style.top = "45px";
            } else {
                document.getElementById("to-ammend").style.top = "-50px";
            }
            prevScrollpos = currentScrollPos;
        }
    })
       
    return (
        <div id="alkalin">
           <section className="lesson-container">
           <div className="buttonWrapper">
                <ButtonLinkToText />
           </div>

                <div className="main">
                    <div id="container"></div>
                        <div id="menu">
                            <div className="button-flip">
                                <a id="helix" className="btn">VIEW ALKALI METALS</a>
                            </div>
                            <div className="button-flip">
                                <a id="table" className="btn">TABLE VIEW</a>
                            </div>
                        </div>
                </div>    
            </section>
            <Text props={props.description} />
        </div>
    );
};
export default props => <AlkaliMetals {...props} />;
