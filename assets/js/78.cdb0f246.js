(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{459:function(s,a,t){"use strict";t.r(a);var n=t(23),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"page-title"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#page-title"}},[s._v("#")]),s._v(" "+s._s(s.$page.title))]),s._v(" "),t("h2",{attrs:{id:"文件权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件权限"}},[s._v("#")]),s._v(" 文件权限")]),s._v(" "),t("p",[s._v("查看")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -al\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# drwxr-xr-x    8 kenny  staff     256  9 10 11:20 .npm")]),s._v("\n")])])]),t("p",[s._v("| drwxr-xr-x | 8 | kenny | staff | 256 | 9  10  11：20 | .npm\n| 文件权限 | 连接数 | 文件所有者 | 文件所属用户组 | 文件大小 | 最后修改日期 | 文件名")]),s._v(" "),t("p",[s._v("-rwxrwx---")]),s._v(" "),t("p",[s._v("\b第一个字符代表这个文件是目录、文件或链接文件等")]),s._v(" "),t("ul",[t("li",[s._v("[d] 目录")]),s._v(" "),t("li",[s._v("[-] \b文件")]),s._v(" "),t("li",[s._v("[l] 连接文件")]),s._v(" "),t("li",[s._v("[b] 可存储接口设备")]),s._v(" "),t("li",[s._v("[c] 串口端口设备")])]),s._v(" "),t("p",[s._v("后面字符3个位一组，[rwx]3个参数的组合。")]),s._v(" "),t("ul",[t("li",[s._v("[r] 可读")]),s._v(" "),t("li",[s._v("[w] 可写")]),s._v(" "),t("li",[s._v("[e] 可执行(execute)")])]),s._v(" "),t("p",[s._v("3个权限的位置不会改变，如果没有权限，就会出现[-]")]),s._v(" "),t("ul",[t("li",[s._v("第一组为“文件所有者的权限”")]),s._v(" "),t("li",[s._v("第二组为“同用户组的权限”")]),s._v(" "),t("li",[s._v("第三组为“其他非本用户组的权限”")])]),s._v(" "),t("p",[s._v("修改")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" .bashrc\n")])])]),t("p",[s._v("数字类型改变文件权限")]),s._v(" "),t("p",[s._v("Linux 文件的基本类型就有9个，分别是 owner、 group、others 三种身份各自的 read 、 write 、 execute 权限，权限与分数的对应：")]),s._v(" "),t("ul",[t("li",[s._v("r = 4")]),s._v(" "),t("li",[s._v("w = 2")]),s._v(" "),t("li",[s._v("x = 1")])]),s._v(" "),t("p",[s._v("例如： owner = rwx = 4 + 2 + 1 = 7")]),s._v(" "),t("p",[s._v("符号类型改变文件权限")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("u")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("rwx,go"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("rx .bashrc\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" a+w .bashrc\n")])])]),t("ul",[t("li",[s._v("[ugoa] 代表用户组")]),s._v(" "),t("li",[s._v("[+-=] 加减赋值")]),s._v(" "),t("li",[s._v("[rwx] 读写权限")])]),s._v(" "),t("h2",{attrs:{id:"目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[s._v("#")]),s._v(" 目录")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rmdir")]),s._v("\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ***")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -a 相当于-pdr")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -f 强制")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -i 询问")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -r 递归")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ***")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -p 连同属性一起赋值 （备份）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -u 检查为新则覆盖")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -s symbolic link 快捷方式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -d 如为link file 则赋值连接文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -l 建立 hard link，而非复制文件本身")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -f 强制")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -i 询问")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -r 递归")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -f 强制")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -i 询问")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -u 检查为新则覆盖")]),s._v("\n")])])]),t("h2",{attrs:{id:"文件内容审阅"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件内容审阅"}},[s._v("#")]),s._v(" 文件内容审阅")]),s._v(" "),t("p",[s._v("查看")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 文件\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -n 行号")]),s._v("\n")])])]),t("p",[s._v("创建文件")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" 文件\n")])])]),t("h2",{attrs:{id:"查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询"}},[s._v("#")]),s._v(" 查询")]),s._v(" "),t("p",[s._v("查询脚本文件")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" node\n")])])]),t("p",[s._v("查询命令 手册（manual）")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("man")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);