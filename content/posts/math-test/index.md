---
title: "Math Syntax Test"
date: 2024-01-20
venue: "Test"
keywords: ["Mathematics", "Equations", "LaTeX"]
---

**Author**: **Jane Doe**

This is a test file to verify if Hugo can correctly handle symbols like underscores and asterisks within mathematical environments.

## Inline Mathematical Formula Test

Here are some inline mathematical formulas containing underscores and asterisks:

- Basic subscripts:：$x_i$ 和 $y_{i,j}$
- Complex subscripts：$\sum_{i=1}^{n} x_i$ 和 $\prod_{k=0}^{m} a_k$
- Asterisk operations：$a^* \cdot b^*$ 和 $f^*(x)$
- Mixed symbols：$\alpha_{i,j}^* + \beta_k^{**}$

## Block-level Mathematical Formula Test

### Matrices and Vectors

$$
\mathbf{A} = \begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{pmatrix}
$$

### Summation and Integration

$$
\sum_{i=1}^{n} \sum_{j=1}^{m} a_{i,j} x_i y_j = \int_{-\infty}^{\infty} f^*(t) e^{-i\omega t} dt
$$

### Complex Mathematical Expressions

$$
\frac{\partial^2 u}{\partial t^2} = c^2 \nabla^2 u + f(x_1, x_2, x_3, t)
$$

### Machine Learning Formula

$$
\mathcal{L}(\theta) = -\frac{1}{N} \sum_{i=1}^{N} \sum_{c=1}^{C} y_{i,c} \log(\hat{y}_{i,c}) + \lambda \sum_{j=1}^{d} \theta_j^2
$$

### Probability Distribution
$$
p(x|\mu, \sigma^2) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)
$$

## Mixed Content Test

在文本中，我们有 $E = mc^2$，而损失函数为：

$$
\mathcal{L} = \sum_{i=1}^{n} \ell(y_i, \hat{y}_i) + \frac{\lambda}{2} \|\theta\|_2^2
$$

其中 $\ell$ 是损失函数，$\lambda > 0$ 是正则化参数。

这段文本包含了**粗体**和*斜体*，但数学公式中的下划线应该不受影响。
