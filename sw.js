if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,l)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let r={};const o=e=>i(e,a),c={module:{uri:a},exports:r,require:o};s[a]=Promise.all(n.map((e=>c[e]||o(e)))).then((e=>(l(...e),r)))}}define(["./workbox-21a32daf"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"b4713642d9c3fb9f73f7c90d054f5642"},{url:"about.html",revision:"40be0a98899a12aa7db0ee1273441379"},{url:"advanced/assembly.html",revision:"f4bdca273245da68caf0306c0cd71936"},{url:"advanced/async.html",revision:"7ec541e3bcdd5cda48523354a6ac5e47"},{url:"advanced/comptime.html",revision:"7516c6f8545f7a0076593f53ea82ea7e"},{url:"advanced/interact-with-c.html",revision:"6d5d7e45b314abbc95c15833f5cfcef6"},{url:"advanced/memory_manage.html",revision:"439e39ba9dd39f50f83cb05e88f1d02f"},{url:"advanced/package_management.html",revision:"73ab186d188eb1c07d6de7f262bb85aa"},{url:"advanced/type_cast.html",revision:"e2d4a94576047ba1f0ae02af8c8f325f"},{url:"appendix/community.html",revision:"4aeff2c68ea3e2f78bdd75f4ea0a65d0"},{url:"appendix/well-known-lib.html",revision:"04c14064b5c46cd86811a5b6f19d99ab"},{url:"assets/about.md.ykIArmoL.js",revision:null},{url:"assets/about.md.ykIArmoL.lean.js",revision:null},{url:"assets/advanced_assembly.md.kcZHkdaY.js",revision:null},{url:"assets/advanced_assembly.md.kcZHkdaY.lean.js",revision:null},{url:"assets/advanced_async.md.VQGCngWL.js",revision:null},{url:"assets/advanced_async.md.VQGCngWL.lean.js",revision:null},{url:"assets/advanced_comptime.md.pnTIkLZt.js",revision:null},{url:"assets/advanced_comptime.md.pnTIkLZt.lean.js",revision:null},{url:"assets/advanced_interact-with-c.md.H69Ithrp.js",revision:null},{url:"assets/advanced_interact-with-c.md.H69Ithrp.lean.js",revision:null},{url:"assets/advanced_memory_manage.md.s1OISxzm.js",revision:null},{url:"assets/advanced_memory_manage.md.s1OISxzm.lean.js",revision:null},{url:"assets/advanced_package_management.md.FRSgJEnR.js",revision:null},{url:"assets/advanced_package_management.md.FRSgJEnR.lean.js",revision:null},{url:"assets/advanced_type_cast.md.8Z3dUuH7.js",revision:null},{url:"assets/advanced_type_cast.md.8Z3dUuH7.lean.js",revision:null},{url:"assets/app.U6MoK_pz.js",revision:null},{url:"assets/appendix_community.md.G9EBoso1.js",revision:null},{url:"assets/appendix_community.md.G9EBoso1.lean.js",revision:null},{url:"assets/appendix_well-known-lib.md.E9mBt57o.js",revision:null},{url:"assets/appendix_well-known-lib.md.E9mBt57o.lean.js",revision:null},{url:"assets/basic_advanced_type_array.md.eOK9v2rT.js",revision:null},{url:"assets/basic_advanced_type_array.md.eOK9v2rT.lean.js",revision:null},{url:"assets/basic_advanced_type_enum.md.teTwvbO-.js",revision:null},{url:"assets/basic_advanced_type_enum.md.teTwvbO-.lean.js",revision:null},{url:"assets/basic_advanced_type_opaque.md.K5RBMZJL.js",revision:null},{url:"assets/basic_advanced_type_opaque.md.K5RBMZJL.lean.js",revision:null},{url:"assets/basic_advanced_type_pointer.md.li6jvhWa.js",revision:null},{url:"assets/basic_advanced_type_pointer.md.li6jvhWa.lean.js",revision:null},{url:"assets/basic_advanced_type_silce.md.uxKDLaLD.js",revision:null},{url:"assets/basic_advanced_type_silce.md.uxKDLaLD.lean.js",revision:null},{url:"assets/basic_advanced_type_struct.md.RRpJEZDL.js",revision:null},{url:"assets/basic_advanced_type_struct.md.RRpJEZDL.lean.js",revision:null},{url:"assets/basic_advanced_type_vector.md.5ogYL8pw.js",revision:null},{url:"assets/basic_advanced_type_vector.md.5ogYL8pw.lean.js",revision:null},{url:"assets/basic_basic_type_char-and-boolean.md.X0W9fM-3.js",revision:null},{url:"assets/basic_basic_type_char-and-boolean.md.X0W9fM-3.lean.js",revision:null},{url:"assets/basic_basic_type_function.md.4WZ2Qbdw.js",revision:null},{url:"assets/basic_basic_type_function.md.4WZ2Qbdw.lean.js",revision:null},{url:"assets/basic_basic_type_number.md.ZowYXGf7.js",revision:null},{url:"assets/basic_basic_type_number.md.ZowYXGf7.lean.js",revision:null},{url:"assets/basic_define-variable.md.iJdilg5K.js",revision:null},{url:"assets/basic_define-variable.md.iJdilg5K.lean.js",revision:null},{url:"assets/basic_error_handle.md.cIdpCR5n.js",revision:null},{url:"assets/basic_error_handle.md.cIdpCR5n.lean.js",revision:null},{url:"assets/basic_optional_type.md.ftN_siKP.js",revision:null},{url:"assets/basic_optional_type.md.ftN_siKP.lean.js",revision:null},{url:"assets/basic_process_control_decision.md.FgZay4UH.js",revision:null},{url:"assets/basic_process_control_decision.md.FgZay4UH.lean.js",revision:null},{url:"assets/basic_process_control_defer.md.9IxGuh4Y.js",revision:null},{url:"assets/basic_process_control_defer.md.9IxGuh4Y.lean.js",revision:null},{url:"assets/basic_process_control_loop.md.6u42oGDo.js",revision:null},{url:"assets/basic_process_control_loop.md.6u42oGDo.lean.js",revision:null},{url:"assets/basic_process_control_switch.md.XxiUgH7Q.js",revision:null},{url:"assets/basic_process_control_switch.md.XxiUgH7Q.lean.js",revision:null},{url:"assets/basic_process_control_unreachable.md.bkAxL_Rj.js",revision:null},{url:"assets/basic_process_control_unreachable.md.bkAxL_Rj.lean.js",revision:null},{url:"assets/basic_union.md.k4LNj3hx.js",revision:null},{url:"assets/basic_union.md.k4LNj3hx.lean.js",revision:null},{url:"assets/chunks/@localSearchIndexroot.mS3j_BnA.js",revision:null},{url:"assets/chunks/framework.xodzkkLE.js",revision:null},{url:"assets/chunks/giscus-aTimukGI.jKnbteiG.js",revision:null},{url:"assets/chunks/theme.ndGwu-Ce.js",revision:null},{url:"assets/chunks/virtual_pwa-register.hH3aQ4G2.js",revision:null},{url:"assets/chunks/VPLocalSearchBox.J42UeYCZ.js",revision:null},{url:"assets/chunks/workbox-window.prod.es5.prqDwDSL.js",revision:null},{url:"assets/engineering_build-system.md.Jz5vx_iI.js",revision:null},{url:"assets/engineering_build-system.md.Jz5vx_iI.lean.js",revision:null},{url:"assets/engineering_unit-test.md.MtsSr4Am.js",revision:null},{url:"assets/engineering_unit-test.md.MtsSr4Am.lean.js",revision:null},{url:"assets/environment_editor.md.5JIzLNPP.js",revision:null},{url:"assets/environment_editor.md.5JIzLNPP.lean.js",revision:null},{url:"assets/environment_install-environment.md.Xy9U4GBU.js",revision:null},{url:"assets/environment_install-environment.md.Xy9U4GBU.lean.js",revision:null},{url:"assets/environment_zig-command.md.k5AXqUAD.js",revision:null},{url:"assets/environment_zig-command.md.k5AXqUAD.lean.js",revision:null},{url:"assets/epilogue.md.IIkM0UVC.js",revision:null},{url:"assets/epilogue.md.IIkM0UVC.lean.js",revision:null},{url:"assets/hello-world.md.2rgOk8R7.js",revision:null},{url:"assets/hello-world.md.2rgOk8R7.lean.js",revision:null},{url:"assets/index.md.mZ4-zn6L.js",revision:null},{url:"assets/index.md.mZ4-zn6L.lean.js",revision:null},{url:"assets/more_atomic.md.AGap3aE0.js",revision:null},{url:"assets/more_atomic.md.AGap3aE0.lean.js",revision:null},{url:"assets/more_builtin_func.md.33sAmGTs.js",revision:null},{url:"assets/more_builtin_func.md.33sAmGTs.lean.js",revision:null},{url:"assets/more_miscellaneous.md.N1iWHECA.js",revision:null},{url:"assets/more_miscellaneous.md.N1iWHECA.lean.js",revision:null},{url:"assets/more_reflection.md.251xBZ8_.js",revision:null},{url:"assets/more_reflection.md.251xBZ8_.lean.js",revision:null},{url:"assets/more_style_guide.md.wYAcMmkk.js",revision:null},{url:"assets/more_style_guide.md.wYAcMmkk.lean.js",revision:null},{url:"assets/more_undefined_behavior.md.yLxv5aEl.js",revision:null},{url:"assets/more_undefined_behavior.md.yLxv5aEl.lean.js",revision:null},{url:"assets/more_wasm.md.dwlqgUeU.js",revision:null},{url:"assets/more_wasm.md.dwlqgUeU.lean.js",revision:null},{url:"assets/more_zero-type.md.WDjyt19_.js",revision:null},{url:"assets/more_zero-type.md.WDjyt19_.lean.js",revision:null},{url:"assets/prologue.md.zOhSoIhc.js",revision:null},{url:"assets/prologue.md.zOhSoIhc.lean.js",revision:null},{url:"assets/style.ImankCKb.css",revision:null},{url:"basic/advanced_type/array.html",revision:"3818f6782c9b1757dab3fd5c0984f172"},{url:"basic/advanced_type/enum.html",revision:"8e3b6ed3309973ec25a9e056e26d3747"},{url:"basic/advanced_type/opaque.html",revision:"91f98f7c2e29b2914143730cdcf13573"},{url:"basic/advanced_type/pointer.html",revision:"9974495b1c8901bff5228a452960a233"},{url:"basic/advanced_type/silce.html",revision:"c0ab2c8823981b0e0b273f9c3ade1f24"},{url:"basic/advanced_type/struct.html",revision:"21b0408ac142986df5b15c2ebaa7db01"},{url:"basic/advanced_type/vector.html",revision:"42252d443d4301b3991478199fcbb0c0"},{url:"basic/basic_type/char-and-boolean.html",revision:"15b7379a7be974b157ca460857ae0fbb"},{url:"basic/basic_type/function.html",revision:"815109ee92f48c56ff7207dc5f9c3380"},{url:"basic/basic_type/number.html",revision:"619c07028a92a0e7673d967ca3ce4f78"},{url:"basic/define-variable.html",revision:"104c9c8d3982387220ad06d696a7f528"},{url:"basic/error_handle.html",revision:"160988636584a3833163c0f9ffdb8931"},{url:"basic/optional_type.html",revision:"bfa40a354edbeb5823e7aa070ba55aac"},{url:"basic/process_control/decision.html",revision:"0e18f7b396078dfb674116d011d9eda1"},{url:"basic/process_control/defer.html",revision:"e71f3000909be4bc95a39c664ed2cc98"},{url:"basic/process_control/loop.html",revision:"979a708da34f9b517e8f46832368db8a"},{url:"basic/process_control/switch.html",revision:"5d53646777a80d5e26149bd3aa1a9752"},{url:"basic/process_control/unreachable.html",revision:"2d559f77fec29a5739895bd6c7bdb79d"},{url:"basic/union.html",revision:"32d221ad790f014e6effd3bfdb48e0d6"},{url:"engineering/build-system.html",revision:"297f500d8e991e611d29645983557cd6"},{url:"engineering/unit-test.html",revision:"ba4c42ec496be6526dfb9246e39aea65"},{url:"environment/editor.html",revision:"13cf4d9f9d35ba8a28706b27916aafec"},{url:"environment/install-environment.html",revision:"bc33d5a25335517e25a221cdb22ac682"},{url:"environment/zig-command.html",revision:"c4d33965631223eefcdd870608c9034e"},{url:"epilogue.html",revision:"5b4e3444da3cb8c979ec46c270e7835f"},{url:"hello-world.html",revision:"fd2866635bc5d60d3ec72777bd64a543"},{url:"index.html",revision:"7594eed180ad101243a339072d58c3b1"},{url:"more/atomic.html",revision:"7e354153421750e464827aeb33e3ae96"},{url:"more/builtin_func.html",revision:"3e052160f82841e7911e05f7da76e52c"},{url:"more/miscellaneous.html",revision:"349748bbc7c72ca09535df6c8676dea6"},{url:"more/reflection.html",revision:"86c6f5a2454ff8d0c783bb80145b7416"},{url:"more/style_guide.html",revision:"b9e7c6d7cfde0913a7cf80063a12d06b"},{url:"more/undefined_behavior.html",revision:"8cbbde2bc2a8934327ecc8227e099f8e"},{url:"more/wasm.html",revision:"58868e216ff2b869a28fc5757d4984e5"},{url:"more/zero-type.html",revision:"6fcc273581838d48737d7da0b88272fa"},{url:"prologue.html",revision:"3cdd168c2b752b72e315c2da67c5828c"},{url:"favicon.ico",revision:"5bdeb6897404e4cf8f35bae74ec66f1c"},{url:"apple-touch-icon.png",revision:"2b58137eae853c0890ccbbc7a24ba4e0"},{url:"safari-pinned-tab.svg",revision:"a0423af86cc7b79f7c8001dca33dd027"},{url:"android-chrome-192x192.png",revision:"cfa7b3ef9e2cf141fd54728cdc22a583"},{url:"android-chrome-512x512.png",revision:"61edb901e78c4a3cfcac6c18956995f0"},{url:"manifest.webmanifest",revision:"8073ded314973b7a852b95d1ac95e757"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{allowlist:[/^\/zig\x2dcourse\/about(\.html)?$/,/^\/zig\x2dcourse\/advanced\/assembly(\.html)?$/,/^\/zig\x2dcourse\/advanced\/async(\.html)?$/,/^\/zig\x2dcourse\/advanced\/comptime(\.html)?$/,/^\/zig\x2dcourse\/advanced\/interact\x2dwith\x2dc(\.html)?$/,/^\/zig\x2dcourse\/advanced\/memory_manage(\.html)?$/,/^\/zig\x2dcourse\/advanced\/package_management(\.html)?$/,/^\/zig\x2dcourse\/advanced\/type_cast(\.html)?$/,/^\/zig\x2dcourse\/appendix\/community(\.html)?$/,/^\/zig\x2dcourse\/appendix\/well\x2dknown\x2dlib(\.html)?$/,/^\/zig\x2dcourse\/basic\/advanced_type\/array(\.html)?$/,/^\/zig\x2dcourse\/basic\/advanced_type\/enum(\.html)?$/,/^\/zig\x2dcourse\/basic\/advanced_type\/opaque(\.html)?$/,/^\/zig\x2dcourse\/basic\/advanced_type\/pointer(\.html)?$/,/^\/zig\x2dcourse\/basic\/advanced_type\/silce(\.html)?$/,/^\/zig\x2dcourse\/basic\/advanced_type\/struct(\.html)?$/,/^\/zig\x2dcourse\/basic\/advanced_type\/vector(\.html)?$/,/^\/zig\x2dcourse\/basic\/basic_type\/char\x2dand\x2dboolean(\.html)?$/,/^\/zig\x2dcourse\/basic\/basic_type\/function(\.html)?$/,/^\/zig\x2dcourse\/basic\/basic_type\/number(\.html)?$/,/^\/zig\x2dcourse\/basic\/define\x2dvariable(\.html)?$/,/^\/zig\x2dcourse\/basic\/error_handle(\.html)?$/,/^\/zig\x2dcourse\/basic\/optional_type(\.html)?$/,/^\/zig\x2dcourse\/basic\/process_control\/decision(\.html)?$/,/^\/zig\x2dcourse\/basic\/process_control\/defer(\.html)?$/,/^\/zig\x2dcourse\/basic\/process_control\/loop(\.html)?$/,/^\/zig\x2dcourse\/basic\/process_control\/switch(\.html)?$/,/^\/zig\x2dcourse\/basic\/process_control\/unreachable(\.html)?$/,/^\/zig\x2dcourse\/basic\/union(\.html)?$/,/^\/zig\x2dcourse\/engineering\/build\x2dsystem(\.html)?$/,/^\/zig\x2dcourse\/engineering\/unit\x2dtest(\.html)?$/,/^\/zig\x2dcourse\/environment\/editor(\.html)?$/,/^\/zig\x2dcourse\/environment\/install\x2denvironment(\.html)?$/,/^\/zig\x2dcourse\/environment\/zig\x2dcommand(\.html)?$/,/^\/zig\x2dcourse\/epilogue(\.html)?$/,/^\/zig\x2dcourse\/hello\x2dworld(\.html)?$/,/^\/zig\x2dcourse\/(\.html)?$/,/^\/zig\x2dcourse\/more\/atomic(\.html)?$/,/^\/zig\x2dcourse\/more\/builtin_func(\.html)?$/,/^\/zig\x2dcourse\/more\/miscellaneous(\.html)?$/,/^\/zig\x2dcourse\/more\/reflection(\.html)?$/,/^\/zig\x2dcourse\/more\/style_guide(\.html)?$/,/^\/zig\x2dcourse\/more\/undefined_behavior(\.html)?$/,/^\/zig\x2dcourse\/more\/wasm(\.html)?$/,/^\/zig\x2dcourse\/more\/zero\x2dtype(\.html)?$/,/^\/zig\x2dcourse\/prologue(\.html)?$/]})),e.registerRoute((({request:e,sameOrigin:s})=>s&&"navigate"===e.mode),new e.NetworkOnly({plugins:[{handlerDidError:async()=>Response.redirect("404",302),cacheWillUpdate:async()=>null}]}),"GET")}));
