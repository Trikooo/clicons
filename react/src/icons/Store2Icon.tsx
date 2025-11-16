import React from 'react';
import config from '../config';

interface Store2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Store2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/store2)
 * @see {@link https://clicons.dev/icon/store2}
 */
const Store2Icon = React.forwardRef<SVGSVGElement, Store2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3.50003 9.99976V14.9998C3.50003 17.8282 3.50003 19.2424 4.37871 20.1211C5.25739 20.9998 6.6716 20.9998 9.50003 20.9998H14.5C17.3285 20.9998 18.7427 20.9998 19.6214 20.1211C20.5 19.2424 20.5 17.8282 20.5 14.9998V9.99976'
    }
  ],
  [
    'path',
    {
      d: 'M8 17.9998H16'
    }
  ],
  [
    'path',
    {
      d: 'M17 7.50159C17 8.8823 15.8807 9.99973 14.5 9.99973C13.1193 9.99973 12 8.88044 12 7.49973C12 8.88044 10.8807 9.99973 9.50003 9.99973C8.11932 9.99973 7.00003 8.88044 7.00003 7.49973C7.00003 8.88044 5.82657 9.99973 4.37903 9.99973C3.59986 9.99973 2.9001 9.67543 2.42002 9.16063C1.59464 8.27555 2.12562 6.97378 2.81449 5.98818L3.20203 5.45827C4.08387 4.25246 4.52479 3.64956 5.16494 3.32469C5.8051 2.99983 6.55203 2.99993 8.04589 3.00013L15.9551 3.00119C17.4485 3.00138 18.1952 3.00148 18.8351 3.32634C19.4751 3.65119 19.9158 4.2539 20.7974 5.45933L21.1855 5.99004C21.8744 6.97565 22.4054 8.27742 21.58 9.16249C21.0999 9.67729 20.4002 10.0016 19.621 10.0016C18.1735 10.0016 17 8.8823 17 7.50159Z'
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

Store2Icon.displayName = 'Store2Icon';
export default Store2Icon;
