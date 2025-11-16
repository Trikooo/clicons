import React from 'react';
import config from '../config';

interface TextFirstlineLeftIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TextFirstlineLeftIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/text-firstline-left)
 * @see {@link https://clicons.dev/icon/text-firstline-left}
 */
const TextFirstlineLeftIcon = React.forwardRef<SVGSVGElement, TextFirstlineLeftIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3 3.5H9'
    }
  ],
  [
    'path',
    {
      d: 'M3 9.5H9'
    }
  ],
  [
    'path',
    {
      d: 'M3 15.5H21'
    }
  ],
  [
    'path',
    {
      d: 'M3 21.5H21'
    }
  ],
  [
    'path',
    {
      d: 'M13.5858 9.91421C14.1716 10.5 15.1144 10.5 17 10.5C18.8856 10.5 19.8284 10.5 20.4142 9.91421C21 9.32843 21 8.38562 21 6.5C21 4.61438 21 3.67157 20.4142 3.08579C19.8284 2.5 18.8856 2.5 17 2.5C15.1144 2.5 14.1716 2.5 13.5858 3.08579C13 3.67157 13 4.61438 13 6.5C13 8.38562 13 9.32843 13.5858 9.91421Z'
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

TextFirstlineLeftIcon.displayName = 'TextFirstlineLeftIcon';
export default TextFirstlineLeftIcon;
