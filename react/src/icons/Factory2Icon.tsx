import React from 'react';
import config from '../config';

interface Factory2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Factory2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/factory2)
 * @see {@link https://clicons.dev/icon/factory2}
 */
const Factory2Icon = React.forwardRef<SVGSVGElement, Factory2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2.05702 19.874L4.00488 4.70063C4.18289 3.31398 4.53457 3 5.95624 3C7.37791 3 7.72959 3.31398 7.90759 4.70063L10 21H3.05991C2.52521 21 2.25787 21 2.10693 20.8305C1.95599 20.6611 1.98967 20.3987 2.05702 19.874Z'
    }
  ],
  [
    'path',
    {
      d: 'M10.1537 21H21C21.4714 21 21.7071 21 21.8536 20.8536C22 20.7071 22 20.4714 22 20V7L17.6402 10.6332C16.9306 11.2245 16.5758 11.5201 16.2879 11.3853C16 11.2504 16 10.7886 16 9.86496V7L11.552 10.2349C11.0304 10.6143 10.7696 10.8039 10.4681 10.902C10.1666 11 9.84419 11 9.19926 11H9'
    }
  ],
  [
    'path',
    {
      d: 'M4 6H8'
    }
  ],
  [
    'path',
    {
      d: 'M12 15L14 15'
    }
  ],
  [
    'path',
    {
      d: 'M17 15H19'
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

Factory2Icon.displayName = 'Factory2Icon';
export default Factory2Icon;
