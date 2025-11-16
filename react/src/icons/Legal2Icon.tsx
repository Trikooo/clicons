import React from 'react';
import config from '../config';

interface Legal2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Legal2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/legal2)
 * @see {@link https://clicons.dev/icon/legal2}
 */
const Legal2Icon = React.forwardRef<SVGSVGElement, Legal2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M14.0011 9.79802L4.39343 10.4919C3.10421 10.585 2.00109 9.66574 2.0011 8.49837C2.00111 7.331 3.10426 6.41176 4.39348 6.50485L14.0011 7.19851'
    }
  ],
  [
    'path',
    {
      d: 'M21.001 13.9983L13.0011 13.9984M21.0011 2.99835L13.0012 2.99842M20.0012 2.99836L14.0013 2.99841C14.0013 2.99841 13.5012 5.95993 13.5012 8.49838C13.5012 11.0369 14.0011 13.9984 14.0011 13.9984L20.001 13.9983C20.001 13.9983 20.5011 11.0368 20.5011 8.49832C20.5011 5.95988 20.0012 2.99836 20.0012 2.99836Z'
    }
  ],
  [
    'path',
    {
      d: 'M12.0011 21.0016H21.9989M13.2258 21.0016C13.7773 20.0142 14.1892 18.1245 16.1412 18.0186C16.7209 17.9872 17.3108 17.9872 17.8906 18.0186C19.8426 18.1245 20.2564 20.0142 20.8079 21.0016'
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

Legal2Icon.displayName = 'Legal2Icon';
export default Legal2Icon;
