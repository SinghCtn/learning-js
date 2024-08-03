const languages = {
  js: "java script",
  py: "python",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in languages) {
  console.log(key, ": ", languages[key]);
}

/*
js :  java script
py :  python
cpp :  C++
rb :  ruby
swift :  swift by apple
*/

const arr = ["js", "py", "cpp", "rb", "swift"];
for (const key in arr) {
  console.log(key);
}

/*
0
1
2
3
4
*/

// we can't iterate maps in same way as map's are not iterable
