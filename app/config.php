<?php

 $devMode = false;

 function cacheBuster(){
   global $devMode;
   if ($devMode) {
     echo "?v=".time();
   }
 }
