import{Loader as G,FileLoader as I,BufferGeometry as D,BufferAttribute as E,Vector3 as P,Float32BufferAttribute as H,LoaderUtils as _}from"./three.module.d2a7168b.js";class N extends G{constructor(p){super(p)}load(p,R,T,F){const L=this,h=new I(this.manager);h.setPath(this.path),h.setResponseType("arraybuffer"),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(p,function(V){try{R(L.parse(V))}catch(y){F?F(y):console.error(y),L.manager.itemError(p)}},T,F)}parse(p){function R(e){const t=new DataView(e),n=32/8*3+32/8*3*3+16/8,a=t.getUint32(80,!0);if(80+32/8+a*n===t.byteLength)return!0;const s=[115,111,108,105,100];for(let l=0;l<5;l++)if(T(s,t,l))return!1;return!0}function T(e,t,n){for(let a=0,i=e.length;a<i;a++)if(e[a]!==t.getUint8(n+a))return!1;return!0}function F(e){const t=new DataView(e),n=t.getUint32(80,!0);let a,i,s,l=!1,x,A,U,u,o;for(let r=0;r<80-10;r++)t.getUint32(r,!1)==1129270351&&t.getUint8(r+4)==82&&t.getUint8(r+5)==61&&(l=!0,x=new Float32Array(n*3*3),A=t.getUint8(r+6)/255,U=t.getUint8(r+7)/255,u=t.getUint8(r+8)/255,o=t.getUint8(r+9)/255);const S=84,C=12*4+2,c=new D,w=new Float32Array(n*3*3),m=new Float32Array(n*3*3);for(let r=0;r<n;r++){const d=S+r*C,b=t.getFloat32(d,!0),B=t.getFloat32(d+4,!0),z=t.getFloat32(d+8,!0);if(l){const f=t.getUint16(d+48,!0);(f&32768)===0?(a=(f&31)/31,i=(f>>5&31)/31,s=(f>>10&31)/31):(a=A,i=U,s=u)}for(let f=1;f<=3;f++){const v=d+f*12,g=r*3*3+(f-1)*3;w[g]=t.getFloat32(v,!0),w[g+1]=t.getFloat32(v+4,!0),w[g+2]=t.getFloat32(v+8,!0),m[g]=b,m[g+1]=B,m[g+2]=z,l&&(x[g]=a,x[g+1]=i,x[g+2]=s)}}return c.setAttribute("position",new E(w,3)),c.setAttribute("normal",new E(m,3)),l&&(c.setAttribute("color",new E(x,3)),c.hasColors=!0,c.alpha=o),c}function L(e){const t=new D,n=/solid([\s\S]*?)endsolid/g,a=/facet([\s\S]*?)endfacet/g;let i=0;const s=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,l=new RegExp("vertex"+s+s+s,"g"),x=new RegExp("normal"+s+s+s,"g"),A=[],U=[],u=new P;let o,S=0,C=0,c=0;for(;(o=n.exec(e))!==null;){C=c;const w=o[0];for(;(o=a.exec(w))!==null;){let d=0,b=0;const B=o[0];for(;(o=x.exec(B))!==null;)u.x=parseFloat(o[1]),u.y=parseFloat(o[2]),u.z=parseFloat(o[3]),b++;for(;(o=l.exec(B))!==null;)A.push(parseFloat(o[1]),parseFloat(o[2]),parseFloat(o[3])),U.push(u.x,u.y,u.z),d++,c++;b!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+i),d!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+i),i++}const m=C,r=c-C;t.addGroup(m,r,S),S++}return t.setAttribute("position",new H(A,3)),t.setAttribute("normal",new H(U,3)),t}function h(e){return typeof e!="string"?_.decodeText(new Uint8Array(e)):e}function V(e){if(typeof e=="string"){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer||t}else return e}const y=V(p);return R(y)?F(y):L(h(p))}}export{N as STLLoader};
