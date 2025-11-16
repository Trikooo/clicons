import React from 'react';
import config from '../config';

interface Chemistry2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Chemistry2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/chemistry2)
 * @see {@link https://clicons.dev/icon/chemistry2}
 */
const Chemistry2Icon = React.forwardRef<SVGSVGElement, Chemistry2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M5 3V13C5 16.7712 5 18.6569 6.17157 19.8284C7.34315 21 9.22876 21 13 21H21'
    }
  ],
  [
    'path',
    {
      d: 'M3 9L11 9M20 9H16'
    }
  ],
  [
    'path',
    {
      d: 'M15.2466 4V6.55767C15.2466 7.69966 15.2466 8.27065 15.3937 8.8188C15.5408 9.36696 15.8292 9.87028 16.4059 10.8769L17.1873 12.241C18.6568 14.8062 19.3916 16.0888 18.7888 17.0396L18.7795 17.0541C18.1679 18 16.6119 18 13.5 18C10.3881 18 8.83212 18 8.22055 17.0541L8.21123 17.0396C7.60843 16.0888 8.34319 14.8062 9.8127 12.241L10.5941 10.8769C11.1708 9.87028 11.4592 9.36696 11.6063 8.8188C11.7534 8.27065 11.7534 7.69966 11.7534 6.55767V4'
    }
  ],
  [
    'path',
    {
      d: 'M10.5 4L16.5 4'
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

Chemistry2Icon.displayName = 'Chemistry2Icon';
export default Chemistry2Icon;
