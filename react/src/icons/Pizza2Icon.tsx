import React from 'react';
import config from '../config';

interface Pizza2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Pizza2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/pizza2)
 * @see {@link https://clicons.dev/icon/pizza2}
 */
const Pizza2Icon = React.forwardRef<SVGSVGElement, Pizza2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17.4258 2.87898C15.732 2.31011 13.9049 2 12 2C10.0951 2 8.26804 2.31011 6.57421 2.87898C5.21758 3.3346 4.53927 3.56241 4.16572 4.30884C3.79218 5.05528 4.08752 5.79951 4.67819 7.28799L8.00604 15.674C9.67961 19.8913 10.5164 22 12 22C13.4836 22 14.3204 19.8913 15.994 15.674L19.3218 7.28799C19.9125 5.79952 20.2078 5.05528 19.8343 4.30884C19.4607 3.56241 18.7824 3.3346 17.4258 2.87898Z'
    }
  ],
  [
    'path',
    {
      d: 'M19 7.98586C18.6678 7.70091 18.3891 7.35833 18.181 6.97194C17.3084 5.35222 15.2912 4.62976 13.5189 5.30223C12.6175 5.64425 11.6116 5.63498 10.7173 5.2764C8.9589 4.57139 6.92748 5.25652 6.02234 6.85986C5.76847 7.30957 5.41836 7.69694 5 8'
    }
  ],
  [
    'path',
    {
      d: 'M6 10.3285C6.39004 10.1194 6.84125 10 7.32204 10C8.80104 10 10 11.13 10 12.524C10 13.7496 9.07312 14.7711 7.84398 15'
    }
  ],
  [
    'path',
    {
      d: 'M14.0078 9L13.9988 9'
    }
  ],
  [
    'path',
    {
      d: 'M14 14C13.5 14 13 14.5 13 15'
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

Pizza2Icon.displayName = 'Pizza2Icon';
export default Pizza2Icon;
