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
    text: "学生版",
    items: [
      { text: "获取学习列表", link: "/student/GetStudyList", },
      { text: "如何自动答题", link: "/student/AutomaticAswer", },
    ],
  },
  {
    text: "教师版",
    items: [
	{ text: "导入&获取学生账号", link: "/teacher/ImportAccount", },
	{ text: "一键重置学生密码", link: "/teacher/ResetPass", },
	{ text: "一键修改学生密码", link: "/teacher/ChangePass", },
	{ text: "如何自动答题", link: "/teacher/AutomaticAswer", },
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
