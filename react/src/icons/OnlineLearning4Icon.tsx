import React from 'react';
import config from '../config';

interface OnlineLearning4IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name OnlineLearning4Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/online-learning4)
 * @see {@link https://clicons.dev/icon/online-learning4}
 */
const OnlineLearning4Icon = React.forwardRef<SVGSVGElement, OnlineLearning4IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8.5 19H8.51'
    }
  ],
  [
    'path',
    {
      d: 'M6 6C4.90328 6.05476 4.2191 6.21819 3.73223 6.7059C3 7.43939 3 8.61994 3 10.981V16.9914C3 19.3525 3 20.533 3.73223 21.2665C4.46447 22 5.64298 22 8 22H9C11.357 22 12.5355 22 13.2678 21.2665C14 20.533 14 19.3525 14 16.9914V15'
    }
  ],
  [
    'path',
    {
      d: 'M15 4V11.5M9.77631 2.08242C13.178 1.58922 15 3.47059 15 3.47059C15 3.47059 16.822 1.58922 20.2237 2.08242C20.6819 2.14885 21 2.55824 21 3.02124V9.49465C21 10.1407 20.3935 10.6121 19.7499 10.5572C16.6531 10.293 15 12 15 12C15 12 13.3469 10.293 10.2501 10.5572C9.60646 10.6121 9 10.1407 9 9.49465V3.02124C9 2.55824 9.3181 2.14885 9.77631 2.08242Z'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

OnlineLearning4Icon.displayName = 'OnlineLearning4Icon';
export default OnlineLearning4Icon;
