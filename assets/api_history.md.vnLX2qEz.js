import{_ as t,o as s,c as a,R as i}from"./chunks/framework.rTMGYeCn.js";const u=JSON.parse('{"title":"历史记录相关接口","description":"","frontmatter":{},"headers":[],"relativePath":"api/history.md","filePath":"api/history.md"}'),l={name:"api/history.md"},e=i(`<h1 id="历史记录相关接口" tabindex="-1">历史记录相关接口 <a class="header-anchor" href="#历史记录相关接口" aria-label="Permalink to &quot;历史记录相关接口&quot;">​</a></h1><h2 id="记录历史记录" tabindex="-1">记录历史记录 <a class="header-anchor" href="#记录历史记录" aria-label="Permalink to &quot;记录历史记录&quot;">​</a></h2><h4 id="请求url" tabindex="-1">请求URL <a class="header-anchor" href="#请求url" aria-label="Permalink to &quot;请求URL&quot;">​</a></h4><ul><li><code>http://域名/api/v1/history/add</code></li></ul><h4 id="请求方式" tabindex="-1">请求方式 <a class="header-anchor" href="#请求方式" aria-label="Permalink to &quot;请求方式&quot;">​</a></h4><ul><li>POST</li></ul><h4 id="请求头" tabindex="-1">请求头 <a class="header-anchor" href="#请求头" aria-label="Permalink to &quot;请求头&quot;">​</a></h4><ul><li><code>&quot;content-type&quot;: &quot;application/json&quot;,</code></li><li><code>Authorization&#39;: access_token</code></li></ul><h4 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">必选</th><th style="text-align:left;">类型</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:left;">vid</td><td style="text-align:left;">是</td><td style="text-align:left;">int</td><td>视频id</td></tr><tr><td style="text-align:left;">part</td><td style="text-align:left;">否</td><td style="text-align:left;">int</td><td>分P (默认1)</td></tr><tr><td style="text-align:left;">time</td><td style="text-align:left;">是</td><td style="text-align:left;">float</td><td>时间</td></tr></tbody></table><h4 id="返回示例" tabindex="-1">返回示例 <a class="header-anchor" href="#返回示例" aria-label="Permalink to &quot;返回示例&quot;">​</a></h4><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ok&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span></code></pre></div><h4 id="备注" tabindex="-1">备注 <a class="header-anchor" href="#备注" aria-label="Permalink to &quot;备注&quot;">​</a></h4><p>无</p><h2 id="获取历史记录" tabindex="-1">获取历史记录 <a class="header-anchor" href="#获取历史记录" aria-label="Permalink to &quot;获取历史记录&quot;">​</a></h2><h4 id="请求url-1" tabindex="-1">请求URL <a class="header-anchor" href="#请求url-1" aria-label="Permalink to &quot;请求URL&quot;">​</a></h4><ul><li><code>http://域名/api/v1/history/video/get?page=页码&amp;page_size=内容数量</code></li></ul><h4 id="请求方式-1" tabindex="-1">请求方式 <a class="header-anchor" href="#请求方式-1" aria-label="Permalink to &quot;请求方式&quot;">​</a></h4><ul><li>GET</li></ul><h4 id="请求参数" tabindex="-1">请求参数 <a class="header-anchor" href="#请求参数" aria-label="Permalink to &quot;请求参数&quot;">​</a></h4><ul><li>见url</li></ul><h4 id="返回示例-1" tabindex="-1">返回示例 <a class="header-anchor" href="#返回示例-1" aria-label="Permalink to &quot;返回示例&quot;">​</a></h4><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;history&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                &quot;time&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10.6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                &quot;part&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                &quot;video&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    &quot;vid&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;测试&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    &quot;cover&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    &quot;desc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;什么都没有&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    &quot;clicks&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">86</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    &quot;created_at&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2021-07-29T13:46:21Z&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                &quot;created_at&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2022-06-06T08:42:13.525Z&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ok&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="返回参数说明" tabindex="-1">返回参数说明 <a class="header-anchor" href="#返回参数说明" aria-label="Permalink to &quot;返回参数说明&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:left;">int</td><td style="text-align:left;">int</td><td>历史记录id</td></tr><tr><td style="text-align:left;">time</td><td style="text-align:left;">float</td><td>进度</td></tr><tr><td style="text-align:left;">part</td><td style="text-align:left;">int</td><td>分P (默认1)</td></tr><tr><td style="text-align:left;">created_at</td><td style="text-align:left;">time</td><td>创建时间</td></tr><tr><td style="text-align:left;">video</td><td style="text-align:left;">int</td><td>视频信息</td></tr></tbody></table><h5 id="视频信息video" tabindex="-1">视频信息video <a class="header-anchor" href="#视频信息video" aria-label="Permalink to &quot;视频信息video&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:left;">vid</td><td style="text-align:left;">int</td><td>视频ID</td></tr><tr><td style="text-align:left;">title</td><td style="text-align:left;">string</td><td>标题</td></tr><tr><td style="text-align:left;">cover</td><td style="text-align:left;">string</td><td>封面URL</td></tr><tr><td style="text-align:left;">desc</td><td style="text-align:left;">string</td><td>视频简介</td></tr><tr><td style="text-align:left;">created_at</td><td style="text-align:left;">time</td><td>发布时间</td></tr><tr><td style="text-align:left;">clicks</td><td style="text-align:left;">int</td><td>点击量(点击量不是实时点击量，不准确)</td></tr></tbody></table><h4 id="备注-1" tabindex="-1">备注 <a class="header-anchor" href="#备注-1" aria-label="Permalink to &quot;备注&quot;">​</a></h4><p>无</p><h2 id="获取播放进度" tabindex="-1">获取播放进度 <a class="header-anchor" href="#获取播放进度" aria-label="Permalink to &quot;获取播放进度&quot;">​</a></h2><h4 id="请求url-2" tabindex="-1">请求URL <a class="header-anchor" href="#请求url-2" aria-label="Permalink to &quot;请求URL&quot;">​</a></h4><ul><li><code>http://域名/api/v1/history/progress/get?vid=视频ID</code></li></ul><h4 id="请求方式-2" tabindex="-1">请求方式 <a class="header-anchor" href="#请求方式-2" aria-label="Permalink to &quot;请求方式&quot;">​</a></h4><ul><li>GET</li></ul><h4 id="请求参数-1" tabindex="-1">请求参数 <a class="header-anchor" href="#请求参数-1" aria-label="Permalink to &quot;请求参数&quot;">​</a></h4><ul><li>见url</li></ul><h4 id="返回示例-2" tabindex="-1">返回示例 <a class="header-anchor" href="#返回示例-2" aria-label="Permalink to &quot;返回示例&quot;">​</a></h4><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;progress&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;time&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10.6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;part&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ok&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="返回参数说明-1" tabindex="-1">返回参数说明 <a class="header-anchor" href="#返回参数说明-1" aria-label="Permalink to &quot;返回参数说明&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:left;">time</td><td style="text-align:left;">float</td><td>进度</td></tr><tr><td style="text-align:left;">part</td><td style="text-align:left;">int</td><td>分P (默认1)</td></tr></tbody></table><h4 id="备注-2" tabindex="-1">备注 <a class="header-anchor" href="#备注-2" aria-label="Permalink to &quot;备注&quot;">​</a></h4><p>无</p>`,42),n=[e];function h(d,p,k,r,o,E){return s(),a("div",null,n)}const y=t(l,[["render",h]]);export{u as __pageData,y as default};
