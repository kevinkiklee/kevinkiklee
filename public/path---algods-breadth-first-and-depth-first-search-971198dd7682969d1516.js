webpackJsonp([0xfba5cbfeb509],{383:function(e,n){e.exports={data:{markdownRemark:{html:'<p><strong>[Under Construction]</strong></p>\n<p>Quisque quis fringilla velit, sed posuere leo. Morbi venenatis urna eget dolor pretium, ac elementum ipsum dictum. Aenean orci nisi, sodales in lacinia venenatis, fermentum non libero. Pellentesque.  Quisque quis fringilla velit, sed posuere leo. Morbi venenatis urna eget dolor pretium, ac elementum ipsum dictum. Aenean orci nisi, sodales in lacinia venenatis, fermentum non libero. Pellentesque</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code>p <span class="token function">rand</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0.99</span> <span class="token operator">?</span> <span class="token string">\'i am a god\'</span> <span class="token punctuation">:</span> <span class="token string">\'i have no idea what i am doing\'</span>\n</code></pre>\n      </div>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et purus quis tortor malesuada fringilla. Suspendisse molestie, neque eros auctor <code>sapien</code> magna, vel hendrerit dui purus eget sapien. Phasellus vel elit non turpis vel ullamcorper egestas. <code>p rand() > 0.99 ? \'i am a god\' : \'i have no idea what i am doing\'</code>.  In imperdiet sit amet risus ac faucibus. Curabitur sit amet mattis massa, non tristique nunc. Donec scelerisque sollicitudin nisl, ut semper leo condimentum ac. Donec ullamcorper orci nulla, eget pharetra nisl fermentum eget.</p>\n<h2 id="mattis-massa-non-tristique"><a href="#mattis-massa-non-tristique" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Mattis massa non tristique</h2>\n<p>Quisque quis fringilla velit, sed posuere leo. Morbi venenatis urna eget dolor pretium, ac elementum ipsum dictum. Aenean orci nisi, sodales in lacinia venenatis, fermentum non libero. Pellentesque</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>exports<span class="token punctuation">.</span><span class="token function-variable function">onCreateNode</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> node<span class="token punctuation">,</span> boundActionCreators<span class="token punctuation">,</span> getNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> createNodeField <span class="token punctuation">}</span> <span class="token operator">=</span> boundActionCreators\n  <span class="token keyword">let</span> slug\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>internal<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">\'MarkdownRemark\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> fileNode <span class="token operator">=</span> <span class="token function">getNode</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>parent<span class="token punctuation">)</span>\n    <span class="token keyword">const</span> parsedFilePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>fileNode<span class="token punctuation">.</span>relativePath<span class="token punctuation">)</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>\n      Object<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>hasOwnProperty<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> <span class="token string">\'frontmatter\'</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>\n      Object<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>hasOwnProperty<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>frontmatter<span class="token punctuation">,</span> <span class="token string">\'slug\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      slug <span class="token operator">=</span> <span class="token template-string"><span class="token string">`/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>_<span class="token punctuation">.</span><span class="token function">kebabCase</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>slug<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">createNodeField</span><span class="token punctuation">(</span><span class="token punctuation">{</span> node<span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token string">\'slug\'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> slug <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Quisque quis fringilla velit, sed posuere leo. Morbi venenatis urna eget dolor pretium, ac elementum ipsum dictum. Aenean orci nisi, sodales in lacinia venenatis, fermentum non libero. Pellentesque</p>\n<h1 id="h1---nunc-donec-scelerisque-sollicitudin"><a href="#h1---nunc-donec-scelerisque-sollicitudin" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>H1 - Nunc donec scelerisque sollicitudin</h1>\n<p>Quisque quis fringilla velit, sed posuere leo. Morbi venenatis urna eget dolor pretium, ac elementum ipsum dictum. Aenean orci nisi, sodales in lacinia venenatis, fermentum non libero. Pellentesque</p>\n<h2 id="h2---nunc-donec-scelerisque-sollicitudin"><a href="#h2---nunc-donec-scelerisque-sollicitudin" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>H2 - Nunc donec scelerisque sollicitudin</h2>\n<p>Quisque quis fringilla velit, sed posuere leo. Morbi venenatis urna eget dolor pretium, ac elementum ipsum dictum. Aenean orci nisi, sodales in lacinia venenatis, fermentum non libero. Pellentesque</p>\n<h3 id="h3---nisl-ut-semper-leo-condimentum-ac-donec"><a href="#h3---nisl-ut-semper-leo-condimentum-ac-donec" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>H3 - Nisl ut semper leo condimentum ac Donec</h3>\n<p>Quisque quis fringilla velit, sed posuere leo. Morbi venenatis urna eget dolor pretium, ac elementum ipsum dictum. Aenean orci nisi, sodales in lacinia venenatis, fermentum non libero. Pellentesque</p>\n<h4 id="h4---allamcorper-orci-nulla-eget"><a href="#h4---allamcorper-orci-nulla-eget" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>H4 - Allamcorper orci nulla eget</h4>\n<p>Quisque quis fringilla velit, sed posuere leo. Morbi venenatis urna eget dolor pretium, ac elementum ipsum dictum. Aenean orci nisi, sodales in lacinia venenatis, fermentum non libero. Pellentesque</p>\n<h5 id="h5---pharetra-nisl-fermentum-eget"><a href="#h5---pharetra-nisl-fermentum-eget" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>H5 - pharetra nisl fermentum eget</h5>\n<p>Quisque quis fringilla velit, sed posuere leo. Morbi venenatis urna eget dolor pretium, ac elementum ipsum dictum. Aenean orci nisi, sodales in lacinia venenatis, fermentum non libero. Pellentesque</p>\n<h6 id="h6---enim-suscipit-viverra-et-sit-amet-erat"><a href="#h6---enim-suscipit-viverra-et-sit-amet-erat" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>H6 - Enim suscipit viverra et sit amet erat</h6>\n<p>Quisque quis fringilla velit, sed posuere leo. Morbi venenatis urna eget dolor pretium, ac elementum ipsum dictum. Aenean orci nisi, sodales in lacinia venenatis, fermentum non libero. Pellentesque</p>\n<ul>\n<li>Pharetra nisl fermentum eget.</li>\n<li>Quisque quis fringilla</li>\n<li>Netus et malesuada</li>\n</ul>\n<p>Quisque quis fringilla velit, sed posuere leo. Morbi venenatis urna eget dolor pretium, ac elementum ipsum dictum. Aenean orci nisi, sodales in lacinia venenatis, fermentum non libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis in eros tincidunt, faucibus sem pretium, commodo ante. Quisque sit amet nibh sed tortor congue consectetur tristique ac felis. Duis diam ipsum, congue et leo volutpat, viverra mollis enim. Pellentesque convallis consequat molestie. Ut tincidunt id sapien vitae dictum. Nulla malesuada leo in sapien ullamcorper pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet, risus et fermentum convallis, arcu augue consequat purus, eu luctus ligula nisi in justo. Fusce fringilla tempor tellus ac vulputate.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code>p <span class="token function">rand</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0.99</span> <span class="token operator">?</span> <span class="token string">\'i am a god\'</span> <span class="token punctuation">:</span> <span class="token string">\'i have no idea what i am doing\'</span>\n</code></pre>\n      </div>\n<p>Aliquam tristique vel diam at consectetur. Sed posuere enim sit amet facilisis aliquet. Aenean posuere nisi vitae commodo hendrerit. Sed vehicula id lorem at rhoncus. Ut dictum erat vel euismod porttitor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi sed pellentesque nisl. Nulla facilisi. Etiam euismod eleifend est eget condimentum.</p>\n<ul>\n<li>\n<p>Pharetra nisl fermentum eget.</p>\n<ul>\n<li>Pharetra nisl fermentum eget.</li>\n<li>Quisque quis fringilla</li>\n<li>Netus et malesuada</li>\n</ul>\n</li>\n<li>\n<p>Quisque quis fringilla</p>\n<ul>\n<li>Pharetra nisl fermentum eget</li>\n<li>Pharetra nisl fermentum eget.</li>\n<li>Quisque quis fringilla</li>\n<li>Netus et malesuada</li>\n<li>Quisque quis fringilla</li>\n<li>Pharetra nisl fermentum eget.</li>\n<li>Quisque quis fringilla</li>\n<li>Netus et malesuada</li>\n<li>Netus et malesuada</li>\n<li>Pharetra nisl fermentum eget.</li>\n<li>Quisque quis fringilla</li>\n<li>Netus et malesuada</li>\n</ul>\n</li>\n<li>\n<p>Pharetra nisl fermentum eget.</p>\n<ul>\n<li>Quisque quis fringilla</li>\n<li>\n<p>Netus et malesuada</p>\n<ul>\n<li>Netus et malesuada</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<p>Nulla nec neque sit amet augue ultricies semper. Ut accumsan sem at nisl fringilla, nec fringilla tortor maximus. Proin dui augue, vulputate eu pellentesque nec, sagittis eget ante. Nullam pulvinar nisl eu ornare tincidunt. Aliquam ut massa odio. Donec vel pharetra erat, in tincidunt est. Maecenas non enim nec lectus auctor dignissim rutrum vel ligula.</p>\n<blockquote>\n<p>Duis consequat massa et quam vulputate tincidunt.</p>\n<p>Maecenas vel fermentum lacus. Nulla eu tempor metus, quis porta enim. Aenean accumsan sagittis neque vel aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>\n<p>Proin sed volutpat est, sit amet fringilla nisl. Phasellus id tempus magna, quis posuere elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum pulvinar dui dui, vel vehicula nisi viverra pretium.</p>\n</blockquote>\n<p>Sed lobortis tincidunt sem quis posuere. Fusce nunc augue, ullamcorper non commodo id, efficitur non ligula. Donec nec aliquam sem, ut tristique tortor. Nullam placerat lectus ut nulla faucibus aliquam. Sed at nunc sed eros efficitur tempus et sit amet arcu. Fusce tempus vehicula turpis ut tincidunt. Nulla sit amet sapien mollis, lacinia orci non, interdum felis. Nunc massa augue, convallis ut tortor et, elementum faucibus ex. Curabitur consequat sed arcu eget accumsan. Pellentesque volutpat enim dolor, vitae tempor est vulputate vitae. Donec mattis vulputate diam, non convallis ipsum. Quisque pellentesque dui erat, a finibus nulla congue vel.</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string</span> <span class="token punctuation">{</span>\n\t<span class="token property">color</span><span class="token punctuation">:</span> #a67f59<span class="token punctuation">;</span>\n\t<span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">hsla</span><span class="token punctuation">(</span>0, 0%, 100%, .5<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.token.atrule,\n.token.attr-value,\n.token.keyword</span> <span class="token punctuation">{</span>\n\t<span class="token property">color</span><span class="token punctuation">:</span> #07a<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et purus quis tortor malesuada fringilla. Curabitur sed metus et enim suscipit viverra et sit amet erat. Suspendisse molestie, nibh at facilisis commodo, neque eros auctor magna, vel hendrerit dui purus eget sapien. Phasellus vel elit non turpis ullamcorper egestas. In imperdiet sit amet risus ac faucibus. Curabitur sit amet mattis massa, non tristique nunc. Donec scelerisque sollicitudin nisl, ut semper leo condimentum ac. Donec ullamcorper orci nulla, eget pharetra nisl fermentum eget.</p>\n<h4 id="curabitur-sed-metus-et-enim"><a href="#curabitur-sed-metus-et-enim" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Curabitur sed metus et enim</h4>\n<ul>\n<li>Pharetra nisl fermentum eget.</li>\n<li>Quisque quis fringilla</li>\n<li>Netus et malesuada</li>\n</ul>\n<h4 id="curabitur-sed-metus-et-enim-1"><a href="#curabitur-sed-metus-et-enim-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Curabitur sed metus et enim</h4>\n<ul>\n<li>Pharetra nisl fermentum eget.</li>\n<li>Quisque quis fringilla</li>\n<li>Netus et malesuada</li>\n</ul>\n<h4 id="curabitur-sed-metus-et-enim-2"><a href="#curabitur-sed-metus-et-enim-2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Curabitur sed metus et enim</h4>\n<ul>\n<li>Pharetra nisl fermentum eget.</li>\n<li>Quisque quis fringilla</li>\n<li>Netus et malesuada</li>\n</ul>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et purus quis tortor malesuada fringilla. Curabitur sed metus et enim suscipit viverra et sit amet erat. Suspendisse molestie, nibh at facilisis commodo, neque eros auctor magna, vel hendrerit dui purus eget sapien. Phasellus vel elit non turpis ullamcorper egestas. In imperdiet sit amet risus ac faucibus. Curabitur sit amet mattis massa, non tristique nunc. Donec scelerisque sollicitudin nisl, ut semper leo condimentum ac. Donec ullamcorper orci nulla, eget pharetra nisl  fermentum eget.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et purus quis tortor malesuada fringilla. Curabitur sed metus et enim suscipit viverra et sit amet erat.</p>\n<h2 id="donec-scelerisque-sollicitudins"><a href="#donec-scelerisque-sollicitudins" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Donec scelerisque sollicitudins</h2>\n<p>Suspendisse molestie, nibh at facilisis commodo, neque eros auctor magna, vel hendrerit dui purus eget sapien. Phasellus vel elit non turpis ullamcorper egestas. In imperdiet sit amet risus ac faucibus. Curabitur sit amet mattis massa, non tristique nunc. Donec scelerisque sollicitudin nisl, ut semper leo condimentum ac. Donec ullamcorper orci nulla, eget pharetra nisl fermentum eget.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et purus quis tortor malesuada fringilla. Curabitur sed metus et enim suscipit viverra et sit amet erat. Suspendisse molestie, nibh at facilisis commodo, neque eros auctor magna, vel hendrerit dui purus eget sapien. Phasellus vel elit non turpis ullamcorper egestas. In imperdiet sit amet risus ac faucibus. Curabitur sit amet mattis massa, non tristique nunc. Donec scelerisque sollicitudin nisl, ut semper leo condimentum ac. Donec ullamcorper orci nulla, eget pharetra nisl fermentum eget.</p>',timeToRead:6,excerpt:"Under Construction Quisque quis fringilla velit, sed posuere leo. Morbi venenatis urna eget dolor pretium, ac elementum ipsum dictum. Aenean…",frontmatter:{title:"Breadth-First and Depth-First Search",cover:"/covers/graph.png",date:"2017-12-26",category:"algods",tags:["algorithm","search","tree","bfs","dfs"]},fields:{slug:"/breadth-first-and-depth-first-search"}}},pathContext:{slug:"/breadth-first-and-depth-first-search",path:"/algods/breadth-first-and-depth-first-search"}}}});
//# sourceMappingURL=path---algods-breadth-first-and-depth-first-search-971198dd7682969d1516.js.map