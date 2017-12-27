---
title: "I have no idea what I am doing"
cover: '/covers/facepalm.png'
date: "2017-12-24"
time: "21:13"
category: "rambles"
tags:
  - ramble
---

**[Under Construction]**

Quisque quis fringilla velit, sed posuere leo. Morbi venenatis urna eget dolor pretium, ac elementum ipsum dictum. Aenean orci nisi, sodales in lacinia venenatis, fermentum non libero. Pellentesque.  Quisque quis fringilla velit, sed posuere leo. Morbi venenatis urna eget dolor pretium, ac elementum ipsum dictum. Aenean orci nisi, sodales in lacinia venenatis, fermentum non libero. Pellentesque

```ruby
p rand() > 0.99 ? 'i am a god' : 'i have no idea what i am doing'
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et purus quis tortor malesuada fringilla. Suspendisse molestie, neque eros auctor `sapien` magna, vel hendrerit dui purus eget sapien. Phasellus vel elit non turpis vel ullamcorper egestas. `p rand() > 0.99 ? 'i am a god' : 'i have no idea what i am doing'`.  In imperdiet sit amet risus ac faucibus. Curabitur sit amet mattis massa, non tristique nunc. Donec scelerisque sollicitudin nisl, ut semper leo condimentum ac. Donec ullamcorper orci nulla, eget pharetra nisl fermentum eget.

## Mattis massa non tristique

Quisque quis fringilla velit, sed posuere leo. Morbi venenatis urna eget dolor pretium, ac elementum ipsum dictum. Aenean orci nisi, sodales in lacinia venenatis, fermentum non libero. Pellentesque

```js
exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators
  let slug

  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent)
    const parsedFilePath = path.parse(fileNode.relativePath)

    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.slug)}`
    }

    createNodeField({ node, name: 'slug', value: slug })
  }
}
```

Quisque quis fringilla velit, sed posuere leo. Morbi venenatis urna eget dolor pretium, ac elementum ipsum dictum. Aenean orci nisi, sodales in lacinia venenatis, fermentum non libero. Pellentesque

# H1 - Nunc donec scelerisque sollicitudin

Quisque quis fringilla velit, sed posuere leo. Morbi venenatis urna eget dolor pretium, ac elementum ipsum dictum. Aenean orci nisi, sodales in lacinia venenatis, fermentum non libero. Pellentesque

## H2 - Nunc donec scelerisque sollicitudin

Quisque quis fringilla velit, sed posuere leo. Morbi venenatis urna eget dolor pretium, ac elementum ipsum dictum. Aenean orci nisi, sodales in lacinia venenatis, fermentum non libero. Pellentesque

### H3 - Nisl ut semper leo condimentum ac Donec

Quisque quis fringilla velit, sed posuere leo. Morbi venenatis urna eget dolor pretium, ac elementum ipsum dictum. Aenean orci nisi, sodales in lacinia venenatis, fermentum non libero. Pellentesque

#### H4 - Allamcorper orci nulla eget

Quisque quis fringilla velit, sed posuere leo. Morbi venenatis urna eget dolor pretium, ac elementum ipsum dictum. Aenean orci nisi, sodales in lacinia venenatis, fermentum non libero. Pellentesque

##### H5 - pharetra nisl fermentum eget

Quisque quis fringilla velit, sed posuere leo. Morbi venenatis urna eget dolor pretium, ac elementum ipsum dictum. Aenean orci nisi, sodales in lacinia venenatis, fermentum non libero. Pellentesque

###### H6 - Enim suscipit viverra et sit amet erat

Quisque quis fringilla velit, sed posuere leo. Morbi venenatis urna eget dolor pretium, ac elementum ipsum dictum. Aenean orci nisi, sodales in lacinia venenatis, fermentum non libero. Pellentesque

* Pharetra nisl fermentum eget.
* Quisque quis fringilla
* Netus et malesuada

Quisque quis fringilla velit, sed posuere leo. Morbi venenatis urna eget dolor pretium, ac elementum ipsum dictum. Aenean orci nisi, sodales in lacinia venenatis, fermentum non libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis in eros tincidunt, faucibus sem pretium, commodo ante. Quisque sit amet nibh sed tortor congue consectetur tristique ac felis. Duis diam ipsum, congue et leo volutpat, viverra mollis enim. Pellentesque convallis consequat molestie. Ut tincidunt id sapien vitae dictum. Nulla malesuada leo in sapien ullamcorper pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet, risus et fermentum convallis, arcu augue consequat purus, eu luctus ligula nisi in justo. Fusce fringilla tempor tellus ac vulputate.

```ruby
p rand() > 0.99 ? 'i am a god' : 'i have no idea what i am doing'
```

Aliquam tristique vel diam at consectetur. Sed posuere enim sit amet facilisis aliquet. Aenean posuere nisi vitae commodo hendrerit. Sed vehicula id lorem at rhoncus. Ut dictum erat vel euismod porttitor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi sed pellentesque nisl. Nulla facilisi. Etiam euismod eleifend est eget condimentum.

* Pharetra nisl fermentum eget.
  * Pharetra nisl fermentum eget.
  * Quisque quis fringilla
  * Netus et malesuada
* Quisque quis fringilla
  * Pharetra nisl fermentum eget
    * Pharetra nisl fermentum eget.
    * Quisque quis fringilla
    * Netus et malesuada
  * Quisque quis fringilla
    * Pharetra nisl fermentum eget.
    * Quisque quis fringilla
    * Netus et malesuada
  * Netus et malesuada
    * Pharetra nisl fermentum eget.
    * Quisque quis fringilla
    * Netus et malesuada
* Pharetra nisl fermentum eget.
  * Quisque quis fringilla
    * Netus et malesuada
      * Netus et malesuada

Nulla nec neque sit amet augue ultricies semper. Ut accumsan sem at nisl fringilla, nec fringilla tortor maximus. Proin dui augue, vulputate eu pellentesque nec, sagittis eget ante. Nullam pulvinar nisl eu ornare tincidunt. Aliquam ut massa odio. Donec vel pharetra erat, in tincidunt est. Maecenas non enim nec lectus auctor dignissim rutrum vel ligula.

> Duis consequat massa et quam vulputate tincidunt.
>
> Maecenas vel fermentum lacus. Nulla eu tempor metus, quis porta enim. Aenean accumsan sagittis neque vel aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
>
> Proin sed volutpat est, sit amet fringilla nisl. Phasellus id tempus magna, quis posuere elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum pulvinar dui dui, vel vehicula nisi viverra pretium.

Sed lobortis tincidunt sem quis posuere. Fusce nunc augue, ullamcorper non commodo id, efficitur non ligula. Donec nec aliquam sem, ut tristique tortor. Nullam placerat lectus ut nulla faucibus aliquam. Sed at nunc sed eros efficitur tempus et sit amet arcu. Fusce tempus vehicula turpis ut tincidunt. Nulla sit amet sapien mollis, lacinia orci non, interdum felis. Nunc massa augue, convallis ut tortor et, elementum faucibus ex. Curabitur consequat sed arcu eget accumsan. Pellentesque volutpat enim dolor, vitae tempor est vulputate vitae. Donec mattis vulputate diam, non convallis ipsum. Quisque pellentesque dui erat, a finibus nulla congue vel.

```css
.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
	color: #a67f59;
	background: hsla(0, 0%, 100%, .5);
}

.token.atrule,
.token.attr-value,
.token.keyword {
	color: #07a;
}
```
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et purus quis tortor malesuada fringilla. Curabitur sed metus et enim suscipit viverra et sit amet erat. Suspendisse molestie, nibh at facilisis commodo, neque eros auctor magna, vel hendrerit dui purus eget sapien. Phasellus vel elit non turpis ullamcorper egestas. In imperdiet sit amet risus ac faucibus. Curabitur sit amet mattis massa, non tristique nunc. Donec scelerisque sollicitudin nisl, ut semper leo condimentum ac. Donec ullamcorper orci nulla, eget pharetra nisl fermentum eget.

#### Curabitur sed metus et enim

* Pharetra nisl fermentum eget.
* Quisque quis fringilla
* Netus et malesuada

#### Curabitur sed metus et enim

* Pharetra nisl fermentum eget.
* Quisque quis fringilla
* Netus et malesuada

#### Curabitur sed metus et enim

* Pharetra nisl fermentum eget.
* Quisque quis fringilla
* Netus et malesuada

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et purus quis tortor malesuada fringilla. Curabitur sed metus et enim suscipit viverra et sit amet erat. Suspendisse molestie, nibh at facilisis commodo, neque eros auctor magna, vel hendrerit dui purus eget sapien. Phasellus vel elit non turpis ullamcorper egestas. In imperdiet sit amet risus ac faucibus. Curabitur sit amet mattis massa, non tristique nunc. Donec scelerisque sollicitudin nisl, ut semper leo condimentum ac. Donec ullamcorper orci nulla, eget pharetra nisl  fermentum eget.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et purus quis tortor malesuada fringilla. Curabitur sed metus et enim suscipit viverra et sit amet erat.

## Donec scelerisque sollicitudins

Suspendisse molestie, nibh at facilisis commodo, neque eros auctor magna, vel hendrerit dui purus eget sapien. Phasellus vel elit non turpis ullamcorper egestas. In imperdiet sit amet risus ac faucibus. Curabitur sit amet mattis massa, non tristique nunc. Donec scelerisque sollicitudin nisl, ut semper leo condimentum ac. Donec ullamcorper orci nulla, eget pharetra nisl fermentum eget.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et purus quis tortor malesuada fringilla. Curabitur sed metus et enim suscipit viverra et sit amet erat. Suspendisse molestie, nibh at facilisis commodo, neque eros auctor magna, vel hendrerit dui purus eget sapien. Phasellus vel elit non turpis ullamcorper egestas. In imperdiet sit amet risus ac faucibus. Curabitur sit amet mattis massa, non tristique nunc. Donec scelerisque sollicitudin nisl, ut semper leo condimentum ac. Donec ullamcorper orci nulla, eget pharetra nisl fermentum eget.
