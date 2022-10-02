import fs from "fs"
import path from "path"
import process from "process"

export default [
  {
    text: "开始",
    items: [
      { text: "写在前面", link: "/started", },
	 { text: "快速开始", link: "/quick-start", },
    ],
  },
  {
    text: "教程",
    items: [
      { text: "导入学生账号", link: "/course/importAccount", },
      { text: "如何自动答题", link: "/course/StartAnswering", },
    ],
  },
];

function autoGenerate(dir) {
  let list = fs.readdirSync(path.join(process.cwd(), "docs", dir))
  return list
    .filter(name => name.endsWith(".md"))
    .map(name => {
      name = name.slice(0, -3)
      return {
        text: name,
        link: `/${dir}/${name}`
      }
    })
}
