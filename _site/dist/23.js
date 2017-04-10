webpackJsonp([23],{778:function(n,t,e){"use strict";function d(n){return n&&n.__esModule?n:{default:n}}function a(n){return j.default.createElement(n.tag,(0,b.default)({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function s(n){return j.default.createElement(a,{tag:"section",html:n.html})}function l(n){return j.default.createElement(a,{tag:"style",html:n.style})}var c=e(1),r=d(c),o=e(2),i=d(o),h=e(5),p=d(h),m=e(4),u=d(m),g=e(3),f=d(g),k=e(12),b=d(k),D=e(0),j=d(D),y=e(177),v=function(){function n(n){console.log(n)}return j.default.createElement("div",null,j.default.createElement(y.DatePicker,{className:"zent-picker-demo",onChange:n}),j.default.createElement("br",null),j.default.createElement(y.MonthPicker,{className:"zent-picker-demo",onChange:n}),j.default.createElement("br",null),j.default.createElement(y.DateRangePicker,{className:"zent-picker-demo",onChange:n}))}(),P=function(){function n(n){console.log(n)}return j.default.createElement("div",null,j.default.createElement(y.DatePicker,{className:"zent-picker-demo",format:"YYYY/MM/DD",onChange:n}),j.default.createElement("br",null),j.default.createElement(y.MonthPicker,{className:"zent-picker-demo",format:"YYYY年MM月",onChange:n}),j.default.createElement("br",null),j.default.createElement(y.DateRangePicker,{className:"zent-picker-demo",format:"YYYY-MM-DD",onChange:n}))}(),M=function(){function n(n){console.log(n)}return j.default.createElement("div",null,j.default.createElement(y.DatePicker,{className:"zent-picker-demo",showTime:!0,onChange:n}),j.default.createElement("br",null),j.default.createElement(y.DateRangePicker,{className:"zent-picker-demo",showTime:!0,onChange:n}))}(),C=function(){function n(n){console.log(n)}return j.default.createElement("div",null,j.default.createElement(y.DatePicker,{className:"zent-picker-demo",value:"2017-01-01",disabled:!0}),j.default.createElement("br",null),j.default.createElement(y.MonthPicker,{className:"zent-picker-demo",disabled:!0}),j.default.createElement("br",null),j.default.createElement(y.DateRangePicker,{className:"zent-picker-demo",disabled:!0,onChange:n}))}(),z=function(){function n(n){console.log(n)}function t(n){return n.getDate()%2==0}function e(n,t){return n.getMonth()%2==0}function d(n){return{disabledHour:function(t){return"start"===n?t<12:t>12},disabledMinute:function(n){return n>30},disabledSecond:function(t){return"start"===n?t<20:t>40}}}return j.default.createElement("div",null,j.default.createElement(y.DatePicker,{className:"zent-picker-demo",disabledDate:t,onChange:n}),j.default.createElement("br",null),j.default.createElement(y.DateRangePicker,{className:"zent-picker-demo",disabledDate:e,onChange:n}),j.default.createElement("br",null),j.default.createElement(y.DateRangePicker,{className:"zent-picker-demo",showTime:!0,disabledDate:e,disabledTime:d,onChange:n}))}(),w=function(n){function t(){var n,e,d,a;(0,i.default)(this,t);for(var s=arguments.length,l=Array(s),c=0;c<s;c++)l[c]=arguments[c];return e=d=(0,u.default)(this,(n=t.__proto__||(0,r.default)(t)).call.apply(n,[this].concat(l))),d.state={showCode:!0},d.toggle=function(){d.setState({showCode:!d.state.showCode})},a=e,(0,u.default)(d,a)}return(0,f.default)(t,n),(0,p.default)(t,[{key:"render",value:function(){var n=this.state.showCode,t=this.props,e=t.title,d=t.src,s=t.demo;return j.default.createElement("div",{className:"zandoc-react-demo"},j.default.createElement("div",{className:"zandoc-react-demo__preview"},s),j.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},j.default.createElement("i",{className:"zenticon zenticon-right zandoc-react-demo__toggle "+(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")}),j.default.createElement(a,{tag:"div",attributes:{className:"zandoc-react-demo__title"},html:e})),n&&j.default.createElement(a,{tag:"pre",html:d,attributes:{className:"zandoc-react-demo__code"}}))}}]),t}(D.Component);n.exports=function(n){function t(){return(0,i.default)(this,t),(0,u.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,f.default)(t,n),(0,p.default)(t,[{key:"render",value:function(){return j.default.createElement("div",{className:"zandoc-react-container "},j.default.createElement(l,{style:".zent-picker-demo{\n      margin-bottom: 10px;\n      margin-right: 10px;\n    }"}),j.default.createElement(s,{html:'<h2 id="datepicker -shi-jian-xuan-ze"><a href="#datepicker%20-shi-jian-xuan-ze">¶</a>DatePicker 时间选择</h2>\n<p>时间选择组件, 提供基础的时间、日期筛选功能.</p>\n<h2 id="shi-yong-zhi-nan"><a href="#shi-yong-zhi-nan">¶</a>使用指南</h2>\n<ul>\n<li>包含三个组件：<code>DatePicker</code> 、<code>MonthPicker</code> 和 <code>RangePicker</code>。</li>\n<li><code>DatePicker</code> 和 <code>RangePicker</code> 可以通过 <code>showTime</code> 属性来支持时间的选择。</li>\n<li>通过 <code>format</code> 属性自定义日期字符串的格式，<code>format</code> 的详细说明见页面最后的表格。</li>\n</ul>\n<h2 id="dai-ma-yan-shi"><a href="#dai-ma-yan-shi">¶</a>代码演示</h2>'}),j.default.createElement(w,{title:"<p>基础的日期、月份、时间段选择</p>",src:'<span class="hljs-keyword">import</span> { DatePicker, MonthPicker, DateRangePicker } <span class="hljs-keyword">from</span> <span class="hljs-string">\'zent\'</span>\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">onChange</span>(<span class="hljs-params">val</span>)</span>{\n  <span class="hljs-built_in">console</span>.log(val)\n}\n\nReactDOM.render(\n  &lt;div&gt;\n    &lt;DatePicker\n      className="zent-picker-demo"\n      onChange={onChange}\n    /&gt;\n    &lt;br /&gt;\n    &lt;MonthPicker\n      className="zent-picker-demo"\n      onChange={onChange}\n    /&gt;\n    &lt;br /&gt;\n    &lt;DateRangePicker\n      className="zent-picker-demo"\n      onChange={onChange}\n      /&gt;\n   &lt;/div&gt;\n   , mountNode\n)',demo:v}),j.default.createElement(w,{title:"<p>使用 <code>format</code> 属性来设置日期的显示格式</p>",src:'<span class="hljs-keyword">import</span> { DatePicker, MonthPicker, DateRangePicker } <span class="hljs-keyword">from</span> <span class="hljs-string">\'zent\'</span>\n\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">onChange</span>(<span class="hljs-params">val</span>)</span>{\n  <span class="hljs-built_in">console</span>.log(val)\n}\n\nReactDOM.render(\n  &lt;div&gt;\n    &lt;DatePicker\n      className="zent-picker-demo"\n      format="YYYY/MM/DD"\n      onChange={onChange}\n    /&gt;\n    &lt;br /&gt;\n    &lt;MonthPicker\n      className="zent-picker-demo"\n      format="YYYY年MM月"\n      onChange={onChange}\n    /&gt;\n    &lt;br /&gt;\n    &lt;DateRangePicker\n      className="zent-picker-demo"\n      format="YYYY-MM-DD"\n      onChange={onChange}\n      /&gt;\n   &lt;/div&gt;\n   , mountNode\n)',demo:P}),j.default.createElement(w,{title:"<p>传入 <code>showTime</code> 同时选择时间和日期</p>",src:'<span class="hljs-keyword">import</span> { DatePicker, MonthPicker, DateRangePicker } <span class="hljs-keyword">from</span> <span class="hljs-string">\'zent\'</span>\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">onChange</span>(<span class="hljs-params">val</span>)</span>{\n  <span class="hljs-built_in">console</span>.log(val)\n}\n\nReactDOM.render(\n  &lt;div&gt;\n    &lt;DatePicker\n      className="zent-picker-demo"\n      showTime\n      onChange={onChange}\n    /&gt;\n    &lt;br /&gt;\n    &lt;DateRangePicker\n      className="zent-picker-demo"\n      showTime\n      onChange={onChange}\n      /&gt;\n   &lt;/div&gt;\n   , mountNode\n)',demo:M}),j.default.createElement(w,{title:"<p>传入 <code>disabled</code> 使输入框处于 disabled 状态</p>",src:'<span class="hljs-keyword">import</span> { DatePicker, MonthPicker, DateRangePicker } <span class="hljs-keyword">from</span> <span class="hljs-string">\'zent\'</span>\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">onChange</span>(<span class="hljs-params">val</span>)</span>{\n  <span class="hljs-built_in">console</span>.log(val)\n}\n\nReactDOM.render(\n  &lt;div&gt;\n    &lt;DatePicker\n      className="zent-picker-demo"\n      value="2017-01-01"\n      disabled\n    /&gt;\n    &lt;br /&gt;\n    &lt;MonthPicker\n      className="zent-picker-demo"\n      disabled\n    /&gt;\n    &lt;br /&gt;\n    &lt;DateRangePicker\n      className="zent-picker-demo"\n      disabled\n      onChange={onChange}\n      /&gt;\n   &lt;/div&gt;\n   , mountNode\n)',demo:C}),j.default.createElement(w,{title:"<p>禁用部分日期，可以通过传入 <code>disabledDate</code> 函数来实现，返回 <code>ture</code> 表示禁用。另外，DatePicker 支持传入 <code>min/max</code> 属性来实现简单禁用逻辑。</p>",src:'<span class="hljs-keyword">import</span> { DatePicker, MonthPicker, DateRangePicker } <span class="hljs-keyword">from</span> <span class="hljs-string">\'zent\'</span>\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">onChange</span>(<span class="hljs-params">val</span>)</span>{\n  <span class="hljs-built_in">console</span>.log(val)\n}\n\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">disabledDate</span>(<span class="hljs-params">val</span>) </span>{\n  <span class="hljs-keyword">return</span> val.getDate()%<span class="hljs-number">2</span> === <span class="hljs-number">0</span>\n}\n\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">disabledRangeDate</span>(<span class="hljs-params">val, type</span>)</span>{\n  <span class="hljs-keyword">return</span> (val.getMonth()%<span class="hljs-number">2</span> ===<span class="hljs-number">0</span>)\n}\n\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">disabledRangeTime</span>(<span class="hljs-params">type</span>) </span>{\n    <span class="hljs-keyword">const</span> disabledHour = <span class="hljs-function">(<span class="hljs-params">val</span>) =&gt;</span> {\n      <span class="hljs-keyword">return</span> type === <span class="hljs-string">\'start\'</span> ? val &lt; <span class="hljs-number">12</span> : val &gt; <span class="hljs-number">12</span>;\n    };\n    <span class="hljs-keyword">const</span> disabledMinute = <span class="hljs-function">(<span class="hljs-params">val</span>) =&gt;</span> {\n      <span class="hljs-keyword">return</span> type === <span class="hljs-string">\'start\'</span> ? val &gt; <span class="hljs-number">30</span> : val &gt; <span class="hljs-number">30</span>;\n    };\n    <span class="hljs-keyword">const</span> disabledSecond = <span class="hljs-function">(<span class="hljs-params">val</span>) =&gt;</span> {\n      <span class="hljs-keyword">return</span> type === <span class="hljs-string">\'start\'</span> ? val &lt; <span class="hljs-number">20</span> : val &gt; <span class="hljs-number">40</span>;\n    };\n    <span class="hljs-keyword">return</span> {\n      disabledHour,\n      disabledMinute,\n      disabledSecond\n    };\n  }\n\nReactDOM.render(\n  &lt;div&gt;\n    &lt;DatePicker\n      className="zent-picker-demo"\n      disabledDate={disabledDate}\n      onChange={onChange}\n    /&gt;\n    &lt;br /&gt;\n    &lt;DateRangePicker\n      className="zent-picker-demo"\n      disabledDate={disabledRangeDate}\n      onChange={onChange}\n      /&gt;\n    &lt;br /&gt;\n    &lt;DateRangePicker\n      className="zent-picker-demo"\n      showTime\n      disabledDate={disabledRangeDate}\n      disabledTime={disabledRangeTime}\n      onChange={onChange}\n      /&gt;\n   &lt;/div&gt;\n   , mountNode\n)',demo:z}),j.default.createElement(s,{html:'<h2 id="api"><a href="#api">¶</a>API</h2>\n<h3 id="gong-tong-de- api"><a href="#gong-tong-de-%20api">¶</a>共同的 API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>是否必须</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>默认选择日期</td>\n<td>string/Date</td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>确认日期回调函数，受控组件，value 和 onChange 必须同时提供</td>\n<td>func</td>\n<td><code>noop</code></td>\n<td>是</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>是否处于 disabled 状态</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>format</td>\n<td>返回日期字符串格式</td>\n<td>string</td>\n<td>不同的picker默认值不同，下详</td>\n<td>否</td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>提示文案</td>\n<td>string</td>\n<td>不同的picker默认值不同，下详</td>\n<td>否</td>\n</tr>\n<tr>\n<td>className</td>\n<td>额外的 css 类</td>\n<td>string</td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>自定义前缀</td>\n<td>string</td>\n<td><code>\'zent\'</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>confirmText</td>\n<td>确认按钮文字</td>\n<td>string</td>\n<td>\'确认\'</td>\n<td>否</td>\n</tr>\n</tbody>\n</table>\n<h3 id="datetimepicker"><a href="#datetimepicker">¶</a>DateTimePicker</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>是否必须</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>showTime</td>\n<td>是否显示时间筛选</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>disabledTime</td>\n<td>时间禁用函数</td>\n<td>func</td>\n<td><code>noop</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>disabledDate</td>\n<td>判断日期是否可选函数</td>\n<td>func</td>\n<td><code>noop</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>format</td>\n<td>返回日期字符串格式</td>\n<td>string</td>\n<td><code>YYYY-MM-DD</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>min</td>\n<td>可选日期的最小值</td>\n<td>string/Date</td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>max</td>\n<td>可选日期的最大值</td>\n<td>string/Date</td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>valueType</td>\n<td>设置 onChange 的返回值，可选值为 \n<code>string</code>\n/\n<code>number</code>\n/\n<code>date</code></td>\n<td>string</td>\n<td>\'\'</td>\n<td>否</td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>提示文案</td>\n<td>string</td>\n<td><code>请选择日期</code></td>\n<td>否</td>\n</tr>\n</tbody>\n</table>\n<p><strong>注意：</strong></p>\n<ul>\n<li><code>disabledDate</code> 函数调用时会传入一个 date 对象作为参数，用户可以自定义这个 date 是否处于禁用区间，返回 true/false，需要特殊的禁用规则时可以通过这个函数来实现，一般情况下使用 <code>max</code> 和 <code>min</code> 就可以满足需求。</li>\n<li><code>max/min</code> 和 <code>disabledDate</code> 会存在冲突，同时存在的时候以 <code>disabledDate</code> 的返回值为准。</li>\n<li><code>disabledTime</code> 函数应该返回一个对象，对象中包含 <code>disabledHour</code>,<code>disabledMinute</code>,<code>disabledSecond</code> 三个函数。</li>\n<li><code>format</code> 只需要传日期部分，时间部分当 <code>showTime</code> 为 <code>true</code> 时会自动拼接， 同 <code>RangePicker</code>。</li>\n</ul>\n<p>更详细用法请看示例。</p>\n<h3 id="monthpicker"><a href="#monthpicker">¶</a>MonthPicker</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>是否必须</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>选中的月份</td>\n<td>string/Date</td>\n<td><code>new Date()</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>确认日期回调函数</td>\n<td>func</td>\n<td><code>noop</code></td>\n<td>是</td>\n</tr>\n<tr>\n<td>format</td>\n<td>返回月份字符串格式</td>\n<td>string</td>\n<td><code>\'YYYY-MM\'</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>是否处于disabled 状态</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>提示文案</td>\n<td>string</td>\n<td><code>请选择月份</code></td>\n<td>否</td>\n</tr>\n</tbody>\n</table>\n<h3 id="rangepicker"><a href="#rangepicker">¶</a>RangePicker</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>是否必须</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>showTime</td>\n<td>是否显示时间筛选</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>value</td>\n<td>默认选择日期</td>\n<td>array</td>\n<td><code>[]</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>disabledDate</td>\n<td>判断日期是否可选函数</td>\n<td>func</td>\n<td><code>noop</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>disabledTime</td>\n<td>时间禁用函数</td>\n<td>func</td>\n<td><code>noop</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>format</td>\n<td>返回日期字符串格式</td>\n<td>string</td>\n<td><code>\'YYYY-MM-DD\'</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>min</td>\n<td>可选日期的最小值</td>\n<td>string/instanceOf(Date)</td>\n<td><code></code>\n   | 否</td>\n<td></td>\n</tr>\n<tr>\n<td>max</td>\n<td>可选日期的最大值</td>\n<td>string/instanceOf(Date)</td>\n<td><code></code>\n    | 否</td>\n<td></td>\n</tr>\n<tr>\n<td>valueType</td>\n<td>设置 onChange 的返回值，可选值为 \n<code>string</code>\n/\n<code>number</code>\n/\n<code>date</code></td>\n<td>string</td>\n<td>\'\'</td>\n<td>否</td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>提示文案</td>\n<td>string</td>\n<td><code>[\'开始日期\',\'结束日期\']</code></td>\n<td>否</td>\n</tr>\n</tbody>\n</table>\n<p><strong>注意：</strong></p>\n<ul>\n<li><code>showTime</code> 的时候，传入的 <code>min</code> 或 <code>max</code> 如果为字符串，必须有 time 部分，即 <code>2017-01-01 11:11:11</code> 种格式。</li>\n<li><code>disabledTime</code> 和 <code>DatePicker</code> 的类似，区别在于被调用时会传入一个 <code>type</code> 参数，值为 <code>start/end</code>，参照上面的 <code>disabledTime</code> 函数。：</li>\n</ul>\n<h3 id="ge-shi-hua-zi-fu-biao"><a href="#ge-shi-hua-zi-fu-biao">¶</a>格式化字符表</h3>\n<table class="table">\n<thead>\n<tr>\n<th></th>\n<th>字符</th>\n<th>输出</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Year</strong></td>\n<td>YY</td>\n<td>70 71 ... 29 30</td>\n</tr>\n<tr>\n<td></td>\n<td>YYYY</td>\n<td>1970 1971 ... 2029 2030</td>\n</tr>\n<tr>\n<td><strong>Month</strong></td>\n<td>M</td>\n<td>1 2 ... 11 1</td>\n</tr>\n<tr>\n<td></td>\n<td>MM</td>\n<td>01 02 ... 11 12</td>\n</tr>\n<tr>\n<td></td>\n<td>MMM</td>\n<td>1月, 2月 ... 11月, 12月</td>\n</tr>\n<tr>\n<td></td>\n<td>MMMM</td>\n<td>一月, 二月 ... 十一月, 十二月</td>\n</tr>\n<tr>\n<td><strong>Date</strong></td>\n<td>D</td>\n<td>1 2 ... 30 31</td>\n</tr>\n<tr>\n<td></td>\n<td>DD</td>\n<td>01 02 ... 30 31</td>\n</tr>\n<tr>\n<td></td>\n<td>d</td>\n<td>0 1 ... 5 6</td>\n</tr>\n<tr>\n<td></td>\n<td>ddd</td>\n<td>周日, 周一 ... 周五, 周六</td>\n</tr>\n<tr>\n<td></td>\n<td>dddd</td>\n<td>星期日, 星期一 ... 星期五, 星期六</td>\n</tr>\n</tbody>\n</table>'}))}}]),t}(D.Component)}});