import React from 'react';
import config from '../config';

interface ThreeFinger5IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ThreeFinger5Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/three-finger5)
 * @see {@link https://clicons.dev/icon/three-finger5}
 */
const ThreeFinger5Icon = React.forwardRef<SVGSVGElement, ThreeFinger5IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12.8101 5.70939C12.9539 4.89355 12.4092 4.11556 11.5933 3.97171C10.7775 3.82786 9.99949 4.37261 9.85564 5.18845L9.07422 9.62008L8.14704 14.6982L5.88875 12.3369C5.17559 11.6238 4.00086 11.6888 3.37081 12.4764C2.88873 13.079 2.87541 13.9314 3.33844 14.5488L6.35188 18.5667C7.03576 19.4786 7.3777 19.9345 7.7892 20.2889C8.41699 20.8295 9.16928 21.2056 9.97845 21.3835C10.5088 21.5001 11.0787 21.5001 12.2185 21.5001H14.7006C17.043 21.5001 19.0715 19.8739 19.5809 17.5875L20.8919 11.7039L20.9787 11.2115C21.1226 10.3956 20.5778 9.61763 19.762 9.47377C18.9462 9.32992 18.1682 9.87467 18.0243 10.6905M12.8101 5.70939L13.1574 3.73978C13.3012 2.92394 14.0792 2.37918 14.895 2.52304C15.7109 2.66689 16.2556 3.44488 16.1118 4.26072L15.7645 6.23034M12.8101 5.70939L12.0286 10.141M15.7645 6.23034L14.9831 10.662M15.7645 6.23034C15.9083 5.4145 16.6863 4.86974 17.5022 5.0136C18.318 5.15745 18.8628 5.93544 18.7189 6.75128L18.0243 10.6905M18.0243 10.6905L17.9375 11.1829'
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

ThreeFinger5Icon.displayName = 'ThreeFinger5Icon';
export default ThreeFinger5Icon;
