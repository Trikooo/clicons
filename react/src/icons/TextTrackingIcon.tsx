import React from 'react';
import config from '../config';

interface TextTrackingIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TextTrackingIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/text-tracking)
 * @see {@link https://clicons.dev/icon/text-tracking}
 */
const TextTrackingIcon = React.forwardRef<SVGSVGElement, TextTrackingIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M22 19H2M22 19C22 18.4398 20.4046 17.3932 20 17M22 19C22 19.5602 20.4046 20.6068 20 21M2 19C2 18.4398 3.59544 17.3932 4 17M2 19C2 19.5602 3.59544 20.6068 4 21'
    }
  ],
  [
    'path',
    {
      d: 'M22 14L20.0714 8.5M20.0714 8.5L18.3793 3.67442C18.3324 3.54046 18.3089 3.47349 18.2792 3.4166C18.1653 3.19858 17.9709 3.0495 17.7493 3.01024C17.6915 3 17.6277 3 17.5 3C17.3723 3 17.3085 3 17.2507 3.01024C17.0291 3.0495 16.8347 3.19858 16.7208 3.4166C16.6911 3.47349 16.6676 3.54046 16.6207 3.67442L14.9286 8.5M20.0714 8.5L14.9286 8.5M14.9286 8.5L13 14'
    }
  ],
  [
    'path',
    {
      d: 'M2 3L5.62066 13.3256C5.66763 13.4595 5.69112 13.5265 5.72083 13.5834C5.83469 13.8014 6.02907 13.9505 6.25065 13.9898C6.30847 14 6.37231 14 6.5 14C6.62768 14 6.69153 14 6.74934 13.9898C6.97093 13.9505 7.16531 13.8014 7.27917 13.5834C7.30888 13.5265 7.33237 13.4595 7.37934 13.3256L11 3'
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

TextTrackingIcon.displayName = 'TextTrackingIcon';
export default TextTrackingIcon;
