import splitFile from "split-file";

var files = [
'(@UCseries) Lost.S01E24.1080p.BluRay.mkv.sf-part1', 
'(@UCseries) Lost.S01E24.1080p.BluRay.mkv.mp4.sf-part2',
'(@UCseries) Lost.S01E24.1080p.BluRay.mkv.mp4.sf-part3',
'(@UCseries) Lost.S01E24.1080p.BluRay.mkv.mp4.sf-part4',
'(@UCseries) Lost.S01E24.1080p.BluRay.mkv.mp4.sf-part5',
'(@UCseries) Lost.S01E24.1080p.BluRay.mkv.mp4.sf-part6',
'(@UCseries) Lost.S01E24.1080p.BluRay.mkv.mp4.sf-part7',
]
//var files = fs.readdirSync('./dir');

//console.log(files);
// import { readdir } from 'fs/promises';

// try {
//   const files = await readdir(path);
//   for (const file of files)
//     console.log(file);
// } catch (err) {
//   console.error(err);
// }
splitFile.mergeFiles(files, 'test4.mp4');
//tsc helloworld.js
//node helloworld.js