import React from 'react';
import config from '../config';

interface Navigation2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Navigation2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/navigation2)
 * @see {@link https://clicons.dev/icon/navigation2}
 */
const Navigation2Icon = React.forwardRef<SVGSVGElement, Navigation2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2.00017 11.9496C1.96943 12.9853 6.03156 15.4206 6.41417 14.9373C7.15382 13.8962 7.21955 10.1078 6.45955 9.06478C6.10401 8.58035 2.03018 10.9389 2.00017 11.9496Z'
    }
  ],
  [
    'path',
    {
      d: 'M11.9496 21.9997C12.9853 22.0304 15.4206 17.9683 14.9373 17.5857C13.8962 16.8461 10.1078 16.7803 9.06478 17.5403C8.58035 17.8959 10.9389 21.9697 11.9496 21.9997Z'
    }
  ],
  [
    'path',
    {
      d: 'M21.9998 11.9496C22.0306 12.9853 17.9684 15.4207 17.5858 14.9373C16.8462 13.8962 16.7805 10.1079 17.5404 9.06484C17.896 8.58041 21.9698 10.9389 21.9998 11.9496Z'
    }
  ],
  [
    'path',
    {
      d: 'M11.9496 2.00005C12.9853 1.96931 15.4206 6.03144 14.9373 6.41404C13.8962 7.1537 10.1078 7.21943 9.06478 6.45943C8.58035 6.10389 10.9389 2.03006 11.9496 2.00005Z'
    }
  ],
  [
    'circle',
    {
      cx: '12',
      cy: '12',
      r: '2'
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

Navigation2Icon.displayName = 'Navigation2Icon';
export default Navigation2Icon;
