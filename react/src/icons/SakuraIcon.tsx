import React from 'react';
import config from '../config';

interface SakuraIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SakuraIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/sakura)
 * @see {@link https://clicons.dev/icon/sakura}
 */
const SakuraIcon = React.forwardRef<SVGSVGElement, SakuraIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M14 12.5C14 13.6046 13.1046 14.5 12 14.5C10.8954 14.5 10 13.6046 10 12.5C10 11.3954 10.8954 10.5 12 10.5C13.1046 10.5 14 11.3954 14 12.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 18.0876C11.8851 18.2748 11.7593 18.4624 11.6225 18.6497C10.309 20.4472 8.49591 21.5041 7 21.5L6.69824 19.4251L4.62034 19.781C4.15412 18.3677 4.64876 16.267 5.96228 14.4694C3.93504 13.7655 2.44173 12.3965 2 11.0004L3.85945 10.0686L2.89359 8.20296C4.08097 7.32031 6.42003 7.2136 8.50944 7.90417C8.50944 5.5 9.33594 3.36961 10.5399 2.5L12 4L13.4601 2.5C14.6641 3.36961 15.502 5.5 15.4906 7.90417C17.58 7.2136 19.919 7.32031 21.1064 8.20296L20.1406 10.0686L22 11.0004C21.5583 12.3965 20.065 13.7655 18.0377 14.4694C19.3512 16.267 19.8459 18.3677 19.3797 19.781L17.3018 19.4251L17 21.5C15.5041 21.5041 13.691 20.4472 12.3775 18.6497C12.2407 18.4624 12.1149 18.2748 12 18.0876Z'
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

SakuraIcon.displayName = 'SakuraIcon';
export default SakuraIcon;
