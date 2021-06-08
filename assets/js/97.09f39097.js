(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{483:function(e,t,s){"use strict";s.r(t);var a=s(23),l=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"page-title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#page-title"}},[e._v("#")]),e._v(" "+e._s(e.$page.title))]),e._v(" "),s("p",[e._v("更新最新的 "),s("code",[e._v("PowerShellGet")])]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("Install-Module -Name PowerShellGet -Force\n")])])]),s("p",[e._v("接下来安装模块")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 高亮")]),e._v("\nImport-Module PSReadLine\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# git 状态和补全")]),e._v("\nInstall-Module posh-git -Scope CurrentUser\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# oh-my-posh")]),e._v("\nInstall-Module oh-my-posh -Scope CurrentUser\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# git aliases")]),e._v("\nInstall-Module git-aliases -Scope CurrentUser -AllowClobber\n")])])]),s("p",[e._v("修改 "),s("code",[e._v("$Profile")]),e._v(" 文件")]),e._v(" "),s("blockquote",[s("p",[e._v("Microsoft.PowerShell_profile.ps1")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('Import-Module posh-git # 引入 posh-git\nImport-Module oh-my-posh # 引入 oh-my-posh\nImport-Module git-aliases -DisableNameChecking\n\nSet-Theme Paradox # 设置主题为 Paradox\n\nSet-PSReadLineOption -PredictionSource History # 设置预测文本来源为历史记录\n\nSet-PSReadlineKeyHandler -Key Tab -Function Complete # 设置 Tab 键补全\nSet-PSReadLineKeyHandler -Key "Ctrl+d" -Function MenuComplete # 设置 Ctrl+d 为菜单补全和 Intellisense\nSet-PSReadLineKeyHandler -Key "Ctrl+z" -Function Undo # 设置 Ctrl+z 为撤销\nSet-PSReadLineKeyHandler -Key UpArrow -Function HistorySearchBackward # 设置向上键为后向搜索历史记录\nSet-PSReadLineKeyHandler -Key DownArrow -Function HistorySearchForward # 设置向下键为前向搜索历史纪录\n')])])]),s("p",[e._v("设置 git log 中文编码")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("setx LESSCHARSET "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"utf-8"')]),e._v("\n")])])]),s("p",[s("a",{attrs:{href:"https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_profiles?view=powershell-7.1",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考"),s("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=l.exports}}]);