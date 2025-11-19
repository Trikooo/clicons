import React from 'react';
import config from '../config';

interface DeliveredSentIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name DeliveredSentIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/delivered-sent)
 * @see {@link https://clicons.dev/icon/delivered-sent}
 */
const DeliveredSentIcon = React.forwardRef<SVGSVGElement, DeliveredSentIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'circle',
    {
      cx: '17',
      cy: '19.0001',
      r: '2'
    }
  ],
  [
    'circle',
    {
      cx: '7',
      cy: '19.0001',
      r: '2'
    }
  ],
  [
    'path',
    {
      d: 'M2 9.00012V13.9471C2 16.3291 2 17.5201 2.73223 18.2601C3.2191 18.7522 3.90328 18.917 5 18.9723M12.4271 5.00012C13.3404 5.30002 14.0564 6.02366 14.3532 6.94666C14.5 7.40334 14.5 7.96765 14.5 9.09625C14.5 9.84865 14.5 10.2249 14.5979 10.5293C14.7957 11.1446 15.2731 11.6271 15.882 11.827C16.1832 11.9259 16.5555 11.9259 17.3 11.9259H22V13.9471C22 16.3291 22 17.5201 21.2678 18.2601C20.7809 18.7522 20.0967 18.917 19 18.9723M9 19.0001H15'
    }
  ],
  [
    'path',
    {
      d: 'M14.5 7.00012H16.3212C17.7766 7.00012 18.5042 7.00012 19.0964 7.35383C19.6886 7.70754 20.0336 8.34824 20.7236 9.62962L22 12.0001'
    }
  ],
  [
    'path',
    {
      d: 'M7.32653 8.00012L8.81309 6.82595C9.60436 6.20095 10 5.88845 10 5.50012M7.32653 3.00012L8.81309 4.1743C9.60436 4.7993 10 5.1118 10 5.50012M10 5.50012L2 5.50012'
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

DeliveredSentIcon.displayName = 'DeliveredSentIcon';
export default DeliveredSentIcon;
