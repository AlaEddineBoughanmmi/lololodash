diff --git a/exercises/1_getting_startet/exercise.js b/exercises/1_getting_startet/exercise.js
deleted file mode 100644
index a2900cd..0000000
--- a/exercises/1_getting_startet/exercise.js
+++ /dev/null
@@ -1,46 +0,0 @@
-'use strict';
-
-var verify = require("../../lib/verify.js");
-var _ = require("lodash");
-
-var run = {
-    json: [
-        {
-            id: 22,
-            username: "martin",
-            active: true
-        },
-        {
-            id: 23,
-            username: "max",
-            active: false
-        },
-        {
-            id: 24,
-            username: "linda",
-            active: false
-        }
-    ],
-    expect: [
-        {
-            "id": 22,
-            "username": "martin",
-            "active": true
-        }
-    ]
-};
-
-
-var testing = {
-    'Check with Elements of "run"-Enviroment': {
-        input: run.json,
-        shouldbe: run.expect
-    },
-    'Checking with empty Object': {
-        input: {},
-        shouldbe: []
-    }
-};
-
-module.exports = verify(testing,run);
-
