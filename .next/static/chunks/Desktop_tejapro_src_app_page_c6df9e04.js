(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/tejapro/src/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tejapro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tejapro/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tejapro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tejapro/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tejapro$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tejapro/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Home() {
    _s();
    // Gallery UI with 100 photos, centered, 50% of desktop size, with next/prev controls
    // Generate 100 placeholder image URLs (you can replace these with your own)
    const images = Array.from({
        length: 100
    }, (_, i)=>"https://picsum.photos/seed/".concat(i + 1, "/800/600"));
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tejapro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const handlePrev = ()=>{
        setCurrent((prev)=>prev === 0 ? images.length - 1 : prev - 1);
    };
    const handleNext = ()=>{
        setCurrent((prev)=>prev === images.length - 1 ? 0 : prev + 1);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tejapro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "80vh"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tejapro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "50vw",
                    maxWidth: "800px",
                    aspectRatio: "4/3",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    background: "#f5f5f5",
                    borderRadius: "16px",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tejapro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handlePrev,
                        style: {
                            position: "absolute",
                            left: 10,
                            zIndex: 2,
                            background: "rgba(255,255,255,0.7)",
                            border: "none",
                            borderRadius: "50%",
                            width: 40,
                            height: 40,
                            fontSize: 24,
                            cursor: "pointer"
                        },
                        "aria-label": "Previous photo",
                        children: "←"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/tejapro/src/app/page.js",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tejapro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tejapro$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: images[current],
                        alt: "Photo ".concat(current + 1),
                        fill: true,
                        style: {
                            objectFit: "contain"
                        },
                        sizes: "(max-width: 800px) 100vw, 800px",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/Desktop/tejapro/src/app/page.js",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tejapro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleNext,
                        style: {
                            position: "absolute",
                            right: 10,
                            zIndex: 2,
                            background: "rgba(255,255,255,0.7)",
                            border: "none",
                            borderRadius: "50%",
                            width: 40,
                            height: 40,
                            fontSize: 24,
                            cursor: "pointer"
                        },
                        "aria-label": "Next photo",
                        children: "→"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/tejapro/src/app/page.js",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/tejapro/src/app/page.js",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tejapro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 16,
                    color: "#666"
                },
                children: [
                    current + 1,
                    " / ",
                    images.length
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/tejapro/src/app/page.js",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/tejapro/src/app/page.js",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(Home, "8+O75ArtRNvpQgzeZSk5wKohTHI=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_tejapro_src_app_page_c6df9e04.js.map