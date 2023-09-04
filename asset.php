<?php
$dir = "./asset";
function dir_size($path) {
    $path = rtrim($path, '/');
    $size = 0;
    $dir = opendir($path);
    if (!$dir) {
        return 0;
    }

    while (false !== ($file = readdir($dir))) {
        if ($file == '.' || $file == '..') {
            continue;
        } elseif (is_dir($path . $file)) {
            $size += dir_size($path . DIRECTORY_SEPARATOR . $file);
        } else {
            $size += filesize($path . DIRECTORY_SEPARATOR . $file);
        }
    }
    closedir($dir);
    return $size;
}

echo dir_size($dir)  / 1024;