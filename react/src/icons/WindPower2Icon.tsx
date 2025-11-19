import React from 'react';
import config from '../config';

interface WindPower2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name WindPower2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/wind-power2)
 * @see {@link https://clicons.dev/icon/wind-power2}
 */
const WindPower2Icon = React.forwardRef<SVGSVGElement, WindPower2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z'
    }
  ],
  [
    'path',
    {
      d: 'M4 2.84924C5.10457 1.71692 6.89543 1.71692 8 2.84924L11.5934 6.5329C10.5589 6.70212 9.73787 7.50632 9.54369 8.53222L4 2.84924Z'
    }
  ],
  [
    'path',
    {
      d: 'M20 15.1508C18.8954 16.2831 17.1046 16.2831 16 15.1508L12.4066 11.4671C13.4411 11.2979 14.2621 10.4937 14.4563 9.46778L20 15.1508Z'
    }
  ],
  [
    'path',
    {
      d: 'M20 2.84943C18.8954 1.71711 17.1046 1.7171 16 2.84943L12.4068 6.53293C13.4413 6.70221 14.2622 7.50646 14.4563 8.53238L20 2.84943Z'
    }
  ],
  [
    'path',
    {
      d: 'M4 15.1509C5.10457 16.2833 6.89543 16.2833 8 15.1509L11.5935 11.4671C10.559 11.298 9.73796 10.4938 9.54372 9.46793L4 15.1509Z'
    }
  ],
  [
    'path',
    {
      d: 'M13.4502 16L13.7702 18.5212C13.9962 20.125 14.1092 20.9269 13.8547 21.4634C13.6001 22 13.1067 22 12.1199 22H11.8801C10.8933 22 10.3999 22 10.1453 21.4634C9.89078 20.9269 10.0038 20.125 10.2298 18.5212L10.5498 16'
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

WindPower2Icon.displayName = 'WindPower2Icon';
export default WindPower2Icon;
