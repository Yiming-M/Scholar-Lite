---
title: "Image Positioning Guide"
date: 2025-01-15T10:00:00Z
venue: "Documentation"
keywords: ["Layout", "Image", "Guide"]
---

# Image Control System Test

This document demonstrates the new image control system that allows you to specify image width and position using extended markdown syntax.

## Syntax

The syntax is: `![alt text](image_path)[width, position]`

- **alt text**: Alternative text for the image. Will be displayed as the caption. $KaTeX$ is NOT supported.
- **width**: Percentage of maximum width (10-100), default is 100
- **position**: left, center, or right, default is center

## Examples

### Default (100% width, center position)

![Default Image $x^2$.](posts/image-control-test/vampire.png)

This image uses default settings.

### 50% width, center position

![50% Center](posts/image-control-test/vampire.png)[50, center]

This image is 50% width and centered.

### 30% width, left position

![30% Left](posts/image-control-test/vampire.png)[30, left]

This image is 30% width and aligned to the left.

### 40% width, right position

![40% Right](posts/image-control-test/vampire.png)[40, right]

This image is 40% width and aligned to the right.

### Width only (default center)

![70% Width](posts/image-control-test/vampire.png)[70]

This image is 70% width with default center alignment.

### Position only (default 100% width)

![Left Aligned](posts/image-control-test/vampire.png)[left]

This image uses default 100% width but is left-aligned.

### Various width examples

#### 25% width, center

![25% Center](posts/image-control-test/zombie.png)[25, center]

#### 60% width, center

![60% Center](posts/image-control-test/zombie.png)[60, center]

#### 80% width, center

![80% Center](posts/image-control-test/zombie.png)[80, center]

### Mixed alignments

#### Small image, left aligned

![Small Left](posts/image-control-test/zombie.png)[25, left]

#### Medium image, right aligned

![Medium Right](posts/image-control-test/zombie.png)[50, right]

#### Large image, center aligned

![Large Center](posts/image-control-test/zombie.png)[75, center]

## Features

- **Responsive**: On mobile devices, all images become 100% width and center-aligned
- **Hover effects**: Images have subtle hover animations
- **Consistent styling**: All images maintain consistent border radius and shadows
- **Flexible syntax**: You can specify just width, just position, or both
- **Default values**: Sensible defaults when parameters are omitted

## Technical Details

The system works by:

1. **JavaScript parsing**: A script scans for image elements and looks for control syntax
2. **CSS classes**: Applies appropriate width and position classes
3. **Container wrapping**: Wraps images in containers for better control
4. **Responsive behavior**: Uses CSS media queries for mobile optimization
