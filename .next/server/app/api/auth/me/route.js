/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/me/route";
exports.ids = ["app/api/auth/me/route"];
exports.modules = {

/***/ "(rsc)/./app/api/auth/me/route.ts":
/*!**********************************!*\
  !*** ./app/api/auth/me/route.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n\n\nasync function GET(request) {\n    try {\n        const user = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.getCurrentUser)();\n        if (!user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Not authenticated\"\n            }, {\n                status: 401\n            });\n        }\n        // Return user data without sensitive information\n        const userData = {\n            id: user.id,\n            email: user.email,\n            name: user.name,\n            supabaseUid: user.supabaseUid,\n            avatarUrl: user.avatarUrl,\n            status: user.status,\n            createdAt: user.createdAt,\n            updatedAt: user.updatedAt,\n            templates: user.templates || []\n        };\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            user: userData\n        });\n    } catch (error) {\n        console.error(\"Error in /api/auth/me:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvbWUvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdEO0FBQ1o7QUFFckMsZUFBZUUsSUFBSUMsT0FBb0I7SUFDNUMsSUFBSTtRQUNGLE1BQU1DLE9BQU8sTUFBTUgseURBQWNBO1FBRWpDLElBQUksQ0FBQ0csTUFBTTtZQUNULE9BQU9KLHFEQUFZQSxDQUFDSyxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBb0IsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3pFO1FBRUEsaURBQWlEO1FBQ2pELE1BQU1DLFdBQVc7WUFDZkMsSUFBSUwsS0FBS0ssRUFBRTtZQUNYQyxPQUFPTixLQUFLTSxLQUFLO1lBQ2pCQyxNQUFNUCxLQUFLTyxJQUFJO1lBQ2ZDLGFBQWFSLEtBQUtRLFdBQVc7WUFDN0JDLFdBQVdULEtBQUtTLFNBQVM7WUFDekJOLFFBQVFILEtBQUtHLE1BQU07WUFDbkJPLFdBQVdWLEtBQUtVLFNBQVM7WUFDekJDLFdBQVdYLEtBQUtXLFNBQVM7WUFDekJDLFdBQVdaLEtBQUtZLFNBQVMsSUFBSSxFQUFFO1FBQ2pDO1FBRUEsT0FBT2hCLHFEQUFZQSxDQUFDSyxJQUFJLENBQUM7WUFBRUQsTUFBTUk7UUFBUztJQUM1QyxFQUFFLE9BQU9GLE9BQU87UUFDZFcsUUFBUVgsS0FBSyxDQUFDLDBCQUEwQkE7UUFDeEMsT0FBT04scURBQVlBLENBQUNLLElBQUksQ0FDdEI7WUFBRUMsT0FBTztRQUF3QixHQUNqQztZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsiL2hvbWUvYWJkdWxheml6L0Rlc2t0b3AvUG9ydGZvbGlvcy9hcHAvYXBpL2F1dGgvbWUvcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IHsgZ2V0Q3VycmVudFVzZXIgfSBmcm9tIFwiQC9saWIvYXV0aFwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGdldEN1cnJlbnRVc2VyKCk7XG5cbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIk5vdCBhdXRoZW50aWNhdGVkXCIgfSwgeyBzdGF0dXM6IDQwMSB9KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdXNlciBkYXRhIHdpdGhvdXQgc2Vuc2l0aXZlIGluZm9ybWF0aW9uXG4gICAgY29uc3QgdXNlckRhdGEgPSB7XG4gICAgICBpZDogdXNlci5pZCxcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgc3VwYWJhc2VVaWQ6IHVzZXIuc3VwYWJhc2VVaWQsXG4gICAgICBhdmF0YXJVcmw6IHVzZXIuYXZhdGFyVXJsLFxuICAgICAgc3RhdHVzOiB1c2VyLnN0YXR1cyxcbiAgICAgIGNyZWF0ZWRBdDogdXNlci5jcmVhdGVkQXQsXG4gICAgICB1cGRhdGVkQXQ6IHVzZXIudXBkYXRlZEF0LFxuICAgICAgdGVtcGxhdGVzOiB1c2VyLnRlbXBsYXRlcyB8fCBbXSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgdXNlcjogdXNlckRhdGEgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIC9hcGkvYXV0aC9tZTpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgZXJyb3I6IFwiSW50ZXJuYWwgc2VydmVyIGVycm9yXCIgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJnZXRDdXJyZW50VXNlciIsIkdFVCIsInJlcXVlc3QiLCJ1c2VyIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwidXNlckRhdGEiLCJpZCIsImVtYWlsIiwibmFtZSIsInN1cGFiYXNlVWlkIiwiYXZhdGFyVXJsIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0IiwidGVtcGxhdGVzIiwiY29uc29sZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/me/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCurrentUser: () => (/* binding */ getCurrentUser),\n/* harmony export */   signOut: () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var _supabase_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supabase/server */ \"(rsc)/./lib/supabase/server.ts\");\n/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prisma */ \"(rsc)/./lib/prisma.ts\");\n\n\nasync function getCurrentUser() {\n    try {\n        const supabase = await (0,_supabase_server__WEBPACK_IMPORTED_MODULE_0__.createClient)();\n        const { data: { user: supabaseUser } } = await supabase.auth.getUser();\n        if (!supabaseUser) {\n            return null;\n        }\n        let user;\n        try {\n            user = await _prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.user.findUnique({\n                where: {\n                    supabaseUid: supabaseUser.id\n                },\n                include: {\n                    templates: true\n                }\n            });\n        } catch (err) {\n            console.error(\"Prisma error: Could not fetch user\", err);\n            return null;\n        }\n        if (!user) {\n            try {\n                user = await _prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.user.create({\n                    data: {\n                        email: supabaseUser.email,\n                        name: supabaseUser.user_metadata?.full_name || supabaseUser.email?.split(\"@\")[0],\n                        supabaseUid: supabaseUser.id,\n                        avatarUrl: supabaseUser.user_metadata?.avatar_url\n                    },\n                    include: {\n                        templates: true\n                    }\n                });\n            } catch (err) {\n                console.error(\"Prisma error: Could not create user\", err);\n                return null;\n            }\n        }\n        return user;\n    } catch (error) {\n        console.error(\"getCurrentUser failed:\", error);\n        return null;\n    }\n}\nasync function signOut() {\n    try {\n        const supabase = await (0,_supabase_server__WEBPACK_IMPORTED_MODULE_0__.createClient)();\n        await supabase.auth.signOut();\n    } catch (err) {\n        console.error(\"Sign out failed:\", err);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWlEO0FBQ2Y7QUFFM0IsZUFBZUU7SUFDcEIsSUFBSTtRQUNGLE1BQU1DLFdBQVcsTUFBTUgsOERBQVlBO1FBRW5DLE1BQU0sRUFDSkksTUFBTSxFQUFFQyxNQUFNQyxZQUFZLEVBQUUsRUFDN0IsR0FBRyxNQUFNSCxTQUFTSSxJQUFJLENBQUNDLE9BQU87UUFFL0IsSUFBSSxDQUFDRixjQUFjO1lBQ2pCLE9BQU87UUFDVDtRQUVBLElBQUlEO1FBQ0osSUFBSTtZQUNGQSxPQUFPLE1BQU1KLDJDQUFNQSxDQUFDSSxJQUFJLENBQUNJLFVBQVUsQ0FBQztnQkFDbENDLE9BQU87b0JBQUVDLGFBQWFMLGFBQWFNLEVBQUU7Z0JBQUM7Z0JBQ3RDQyxTQUFTO29CQUFFQyxXQUFXO2dCQUFLO1lBQzdCO1FBQ0YsRUFBRSxPQUFPQyxLQUFLO1lBQ1pDLFFBQVFDLEtBQUssQ0FBQyxzQ0FBc0NGO1lBQ3BELE9BQU87UUFDVDtRQUVBLElBQUksQ0FBQ1YsTUFBTTtZQUNULElBQUk7Z0JBQ0ZBLE9BQU8sTUFBTUosMkNBQU1BLENBQUNJLElBQUksQ0FBQ2EsTUFBTSxDQUFDO29CQUM5QmQsTUFBTTt3QkFDSmUsT0FBT2IsYUFBYWEsS0FBSzt3QkFDekJDLE1BQ0VkLGFBQWFlLGFBQWEsRUFBRUMsYUFDNUJoQixhQUFhYSxLQUFLLEVBQUVJLE1BQU0sSUFBSSxDQUFDLEVBQUU7d0JBQ25DWixhQUFhTCxhQUFhTSxFQUFFO3dCQUM1QlksV0FBV2xCLGFBQWFlLGFBQWEsRUFBRUk7b0JBQ3pDO29CQUNBWixTQUFTO3dCQUFFQyxXQUFXO29CQUFLO2dCQUM3QjtZQUNGLEVBQUUsT0FBT0MsS0FBSztnQkFDWkMsUUFBUUMsS0FBSyxDQUFDLHVDQUF1Q0Y7Z0JBQ3JELE9BQU87WUFDVDtRQUNGO1FBRUEsT0FBT1Y7SUFDVCxFQUFFLE9BQU9ZLE9BQU87UUFDZEQsUUFBUUMsS0FBSyxDQUFDLDBCQUEwQkE7UUFDeEMsT0FBTztJQUNUO0FBQ0Y7QUFFTyxlQUFlUztJQUNwQixJQUFJO1FBQ0YsTUFBTXZCLFdBQVcsTUFBTUgsOERBQVlBO1FBQ25DLE1BQU1HLFNBQVNJLElBQUksQ0FBQ21CLE9BQU87SUFDN0IsRUFBRSxPQUFPWCxLQUFLO1FBQ1pDLFFBQVFDLEtBQUssQ0FBQyxvQkFBb0JGO0lBQ3BDO0FBQ0YiLCJzb3VyY2VzIjpbIi9ob21lL2FiZHVsYXppei9EZXNrdG9wL1BvcnRmb2xpb3MvbGliL2F1dGgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIi4vc3VwYWJhc2Uvc2VydmVyXCI7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiLi9wcmlzbWFcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnRVc2VyKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG5cbiAgICBjb25zdCB7XG4gICAgICBkYXRhOiB7IHVzZXI6IHN1cGFiYXNlVXNlciB9LFxuICAgIH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcblxuICAgIGlmICghc3VwYWJhc2VVc2VyKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgdXNlcjtcbiAgICB0cnkge1xuICAgICAgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICB3aGVyZTogeyBzdXBhYmFzZVVpZDogc3VwYWJhc2VVc2VyLmlkIH0sXG4gICAgICAgIGluY2x1ZGU6IHsgdGVtcGxhdGVzOiB0cnVlIH0sXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJQcmlzbWEgZXJyb3I6IENvdWxkIG5vdCBmZXRjaCB1c2VyXCIsIGVycik7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoe1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGVtYWlsOiBzdXBhYmFzZVVzZXIuZW1haWwhLFxuICAgICAgICAgICAgbmFtZTpcbiAgICAgICAgICAgICAgc3VwYWJhc2VVc2VyLnVzZXJfbWV0YWRhdGE/LmZ1bGxfbmFtZSB8fFxuICAgICAgICAgICAgICBzdXBhYmFzZVVzZXIuZW1haWw/LnNwbGl0KFwiQFwiKVswXSxcbiAgICAgICAgICAgIHN1cGFiYXNlVWlkOiBzdXBhYmFzZVVzZXIuaWQsXG4gICAgICAgICAgICBhdmF0YXJVcmw6IHN1cGFiYXNlVXNlci51c2VyX21ldGFkYXRhPy5hdmF0YXJfdXJsLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaW5jbHVkZTogeyB0ZW1wbGF0ZXM6IHRydWUgfSxcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlByaXNtYSBlcnJvcjogQ291bGQgbm90IGNyZWF0ZSB1c2VyXCIsIGVycik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1c2VyO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJnZXRDdXJyZW50VXNlciBmYWlsZWQ6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2lnbk91dCgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuICAgIGF3YWl0IHN1cGFiYXNlLmF1dGguc2lnbk91dCgpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiU2lnbiBvdXQgZmFpbGVkOlwiLCBlcnIpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50IiwicHJpc21hIiwiZ2V0Q3VycmVudFVzZXIiLCJzdXBhYmFzZSIsImRhdGEiLCJ1c2VyIiwic3VwYWJhc2VVc2VyIiwiYXV0aCIsImdldFVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJzdXBhYmFzZVVpZCIsImlkIiwiaW5jbHVkZSIsInRlbXBsYXRlcyIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImNyZWF0ZSIsImVtYWlsIiwibmFtZSIsInVzZXJfbWV0YWRhdGEiLCJmdWxsX25hbWUiLCJzcGxpdCIsImF2YXRhclVybCIsImF2YXRhcl91cmwiLCJzaWduT3V0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// const { PrismaClient } = require(\"@prisma/client\");\n// const prisma = new PrismaClient();\n// async function main() {\n//   const newPost = await prisma.post.create({\n//     data: {\n//       title: \"My first Supabase post\",\n//       content: \"This is some content.\",\n//       published: true,\n//     },\n//   });\n//   console.log(newPost);\n// }\n// main()\n//   .catch((e) => {\n//     console.error(e);\n//   })\n//   .finally(async () => {\n//     await prisma.$disconnect();\n//   });\n\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"query\"\n    ]\n});\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNEQUFzRDtBQUN0RCxxQ0FBcUM7QUFFckMsMEJBQTBCO0FBQzFCLCtDQUErQztBQUMvQyxjQUFjO0FBQ2QseUNBQXlDO0FBQ3pDLDBDQUEwQztBQUMxQyx5QkFBeUI7QUFDekIsU0FBUztBQUNULFFBQVE7QUFDUiwwQkFBMEI7QUFDMUIsSUFBSTtBQUVKLFNBQVM7QUFDVCxvQkFBb0I7QUFDcEIsd0JBQXdCO0FBQ3hCLE9BQU87QUFDUCwyQkFBMkI7QUFDM0Isa0NBQWtDO0FBQ2xDLFFBQVE7QUFFc0M7QUFFOUMsTUFBTUMsa0JBQWtCQztBQUVqQixNQUFNQyxTQUNYRixnQkFBZ0JFLE1BQU0sSUFDdEIsSUFBSUgsd0RBQVlBLENBQUM7SUFDZkksS0FBSztRQUFDO0tBQVE7QUFDaEIsR0FBRztBQUVMLElBQUlDLElBQXFDLEVBQUVKLGdCQUFnQkUsTUFBTSxHQUFHQSIsInNvdXJjZXMiOlsiL2hvbWUvYWJkdWxheml6L0Rlc2t0b3AvUG9ydGZvbGlvcy9saWIvcHJpc21hLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IHsgUHJpc21hQ2xpZW50IH0gPSByZXF1aXJlKFwiQHByaXNtYS9jbGllbnRcIik7XG4vLyBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbi8vIGFzeW5jIGZ1bmN0aW9uIG1haW4oKSB7XG4vLyAgIGNvbnN0IG5ld1Bvc3QgPSBhd2FpdCBwcmlzbWEucG9zdC5jcmVhdGUoe1xuLy8gICAgIGRhdGE6IHtcbi8vICAgICAgIHRpdGxlOiBcIk15IGZpcnN0IFN1cGFiYXNlIHBvc3RcIixcbi8vICAgICAgIGNvbnRlbnQ6IFwiVGhpcyBpcyBzb21lIGNvbnRlbnQuXCIsXG4vLyAgICAgICBwdWJsaXNoZWQ6IHRydWUsXG4vLyAgICAgfSxcbi8vICAgfSk7XG4vLyAgIGNvbnNvbGUubG9nKG5ld1Bvc3QpO1xuLy8gfVxuXG4vLyBtYWluKClcbi8vICAgLmNhdGNoKChlKSA9PiB7XG4vLyAgICAgY29uc29sZS5lcnJvcihlKTtcbi8vICAgfSlcbi8vICAgLmZpbmFsbHkoYXN5bmMgKCkgPT4ge1xuLy8gICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xuLy8gICB9KTtcblxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbCBhcyB1bmtub3duIGFzIHsgcHJpc21hOiBQcmlzbWFDbGllbnQgfTtcblxuZXhwb3J0IGNvbnN0IHByaXNtYSA9XG4gIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgfHxcbiAgbmV3IFByaXNtYUNsaWVudCh7XG4gICAgbG9nOiBbXCJxdWVyeVwiXSxcbiAgfSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPSBwcmlzbWE7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZ2xvYmFsRm9yUHJpc21hIiwiZ2xvYmFsIiwicHJpc21hIiwibG9nIiwicHJvY2VzcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.ts\n");

/***/ }),

/***/ "(rsc)/./lib/supabase/server.ts":
/*!********************************!*\
  !*** ./lib/supabase/server.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createClient: () => (/* binding */ createClient)\n/* harmony export */ });\n/* harmony import */ var _supabase_ssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/ssr */ \"(rsc)/./node_modules/@supabase/ssr/dist/module/index.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n\n\nasync function createClient() {\n    const cookieStore = await (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)();\n    return (0,_supabase_ssr__WEBPACK_IMPORTED_MODULE_0__.createServerClient)(\"https://dvcvltkopcrpjlglaema.supabase.co\", \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2Y3ZsdGtvcGNycGpsZ2xhZW1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc3NjA3ODMsImV4cCI6MjA3MzMzNjc4M30.b4BuQjBmASlWaz8lgKULsFdrE-CEt_KMyej_u9TNlEg\", {\n        cookies: {\n            get (name) {\n                return cookieStore.get(name)?.value;\n            },\n            set (name, value, options) {\n                cookieStore.set({\n                    name,\n                    value,\n                    ...options\n                });\n            },\n            remove (name, options) {\n                cookieStore.set({\n                    name,\n                    value: \"\",\n                    ...options\n                });\n            }\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvc3VwYWJhc2Uvc2VydmVyLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFtRDtBQUNaO0FBRWhDLGVBQWVFO0lBQ3BCLE1BQU1DLGNBQWMsTUFBTUYscURBQU9BO0lBRWpDLE9BQU9ELGlFQUFrQkEsQ0FDdkJJLDBDQUFvQyxFQUNwQ0Esa05BQXlDLEVBQ3pDO1FBQ0VILFNBQVM7WUFDUE8sS0FBSUMsSUFBWTtnQkFDZCxPQUFPTixZQUFZSyxHQUFHLENBQUNDLE9BQU9DO1lBQ2hDO1lBQ0FDLEtBQUlGLElBQVksRUFBRUMsS0FBYSxFQUFFRSxPQUFZO2dCQUMzQ1QsWUFBWVEsR0FBRyxDQUFDO29CQUFFRjtvQkFBTUM7b0JBQU8sR0FBR0UsT0FBTztnQkFBQztZQUM1QztZQUNBQyxRQUFPSixJQUFZLEVBQUVHLE9BQVk7Z0JBQy9CVCxZQUFZUSxHQUFHLENBQUM7b0JBQUVGO29CQUFNQyxPQUFPO29CQUFJLEdBQUdFLE9BQU87Z0JBQUM7WUFDaEQ7UUFDRjtJQUNGO0FBRUoiLCJzb3VyY2VzIjpbIi9ob21lL2FiZHVsYXppei9EZXNrdG9wL1BvcnRmb2xpb3MvbGliL3N1cGFiYXNlL3NlcnZlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZXJ2ZXJDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL3NzclwiO1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gXCJuZXh0L2hlYWRlcnNcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNsaWVudCgpIHtcbiAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XG5cbiAgcmV0dXJuIGNyZWF0ZVNlcnZlckNsaWVudChcbiAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwhLFxuICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZISxcbiAgICB7XG4gICAgICBjb29raWVzOiB7XG4gICAgICAgIGdldChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgICByZXR1cm4gY29va2llU3RvcmUuZ2V0KG5hbWUpPy52YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgb3B0aW9uczogYW55KSB7XG4gICAgICAgICAgY29va2llU3RvcmUuc2V0KHsgbmFtZSwgdmFsdWUsIC4uLm9wdGlvbnMgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZShuYW1lOiBzdHJpbmcsIG9wdGlvbnM6IGFueSkge1xuICAgICAgICAgIGNvb2tpZVN0b3JlLnNldCh7IG5hbWUsIHZhbHVlOiBcIlwiLCAuLi5vcHRpb25zIH0pO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9XG4gICk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlU2VydmVyQ2xpZW50IiwiY29va2llcyIsImNyZWF0ZUNsaWVudCIsImNvb2tpZVN0b3JlIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZIiwiZ2V0IiwibmFtZSIsInZhbHVlIiwic2V0Iiwib3B0aW9ucyIsInJlbW92ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/supabase/server.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fme%2Froute&page=%2Fapi%2Fauth%2Fme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fme%2Froute.ts&appDir=%2Fhome%2Fabdulaziz%2FDesktop%2FPortfolios%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fabdulaziz%2FDesktop%2FPortfolios&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fme%2Froute&page=%2Fapi%2Fauth%2Fme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fme%2Froute.ts&appDir=%2Fhome%2Fabdulaziz%2FDesktop%2FPortfolios%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fabdulaziz%2FDesktop%2FPortfolios&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_abdulaziz_Desktop_Portfolios_app_api_auth_me_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/me/route.ts */ \"(rsc)/./app/api/auth/me/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/me/route\",\n        pathname: \"/api/auth/me\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/me/route\"\n    },\n    resolvedPagePath: \"/home/abdulaziz/Desktop/Portfolios/app/api/auth/me/route.ts\",\n    nextConfigOutput,\n    userland: _home_abdulaziz_Desktop_Portfolios_app_api_auth_me_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGbWUlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkZtZSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkZtZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGYWJkdWxheml6JTJGRGVza3RvcCUyRlBvcnRmb2xpb3MlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRmhvbWUlMkZhYmR1bGF6aXolMkZEZXNrdG9wJTJGUG9ydGZvbGlvcyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDVztBQUN4RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL2hvbWUvYWJkdWxheml6L0Rlc2t0b3AvUG9ydGZvbGlvcy9hcHAvYXBpL2F1dGgvbWUvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvbWUvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL21lXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL21lL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL2hvbWUvYWJkdWxheml6L0Rlc2t0b3AvUG9ydGZvbGlvcy9hcHAvYXBpL2F1dGgvbWUvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fme%2Froute&page=%2Fapi%2Fauth%2Fme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fme%2Froute.ts&appDir=%2Fhome%2Fabdulaziz%2FDesktop%2FPortfolios%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fabdulaziz%2FDesktop%2FPortfolios&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/tr46","vendor-chunks/whatwg-url","vendor-chunks/webidl-conversions"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fme%2Froute&page=%2Fapi%2Fauth%2Fme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fme%2Froute.ts&appDir=%2Fhome%2Fabdulaziz%2FDesktop%2FPortfolios%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fabdulaziz%2FDesktop%2FPortfolios&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();