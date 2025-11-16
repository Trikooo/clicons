import React from 'react';
import config from '../config';

interface TextSubscriptIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TextSubscriptIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/text-subscript)
 * @see {@link https://clicons.dev/icon/text-subscript}
 */
const TextSubscriptIcon = React.forwardRef<SVGSVGElement, TextSubscriptIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12.5 21H6.5'
    }
  ],
  [
    'path',
    {
      d: 'M16.5 6C16.5 5.37191 16.5 5.05787 16.4194 4.78267C16.2518 4.21026 15.8066 3.71716 15.2541 3.49226C14.9886 3.38413 14.6885 3.35347 14.0884 3.29216C12.6695 3.14718 10.8874 3 9.5 3C8.11262 3 6.33047 3.14718 4.91161 3.29216C4.3115 3.35347 4.01144 3.38413 3.74586 3.49226C3.19344 3.71716 2.74816 4.21026 2.58057 4.78267C2.5 5.05787 2.5 5.37191 2.5 6'
    }
  ],
  [
    'path',
    {
      d: 'M9.5 3.34863L9.5 20.8486'
    }
  ],
  [
    'path',
    {
      d: 'M21.5 21H19.5C19.0286 21 18.7929 21 18.6464 20.8566C18.5 20.7133 18.5 20.4825 18.5 20.021V19.0766C18.5 18.2812 18.676 18.1253 19.5004 18.1094C20.2769 18.0944 20.7401 18.0388 21.0607 17.8333C21.5 17.5516 21.5 17.0983 21.5 16.1916C21.5 14.4594 18.5 15.1262 18.5 15.1262'
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

TextSubscriptIcon.displayName = 'TextSubscriptIcon';
export default TextSubscriptIcon;
