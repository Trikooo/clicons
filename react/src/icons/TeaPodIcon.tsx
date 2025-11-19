import React from 'react';
import config from '../config';

interface TeaPodIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TeaPodIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/tea-pod)
 * @see {@link https://clicons.dev/icon/tea-pod}
 */
const TeaPodIcon = React.forwardRef<SVGSVGElement, TeaPodIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19.0063 10.005V6.5038C19.0063 4.01763 16.9835 2.0022 14.4881 2.0022C11.9928 2.0022 9.96997 4.01763 9.96997 6.5038V10.005'
    }
  ],
  [
    'path',
    {
      d: 'M14.488 9.00468V7.50415'
    }
  ],
  [
    'path',
    {
      d: 'M2.16958 11.1285L6.65238 16.903C6.69082 16.9525 6.71276 17.0127 6.71512 17.0753L6.80491 19.4596C6.83613 20.2884 7.41233 20.9974 8.21953 21.2002L8.46708 21.2624C12.4487 22.2628 16.6198 22.242 20.5912 21.202C21.3686 20.9984 21.9164 20.3061 21.9338 19.5054L21.9942 16.7139C22.0796 12.7815 20.8064 11.9342 20.1836 11.3632C18.7421 10.0416 16.5969 9.72382 14.5369 9.72382C10.9645 9.72382 9.24461 10.7395 8.44615 11.4301C8.27084 11.5817 8.0179 11.618 7.81808 11.5003L3.84377 9.15827C3.49819 8.95462 3.05477 9.03649 2.80537 9.34999L2.17546 10.1418C1.946 10.4302 1.94358 10.8374 2.16958 11.1285Z'
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

TeaPodIcon.displayName = 'TeaPodIcon';
export default TeaPodIcon;
